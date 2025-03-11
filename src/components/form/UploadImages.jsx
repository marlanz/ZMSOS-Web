
import  { useState } from "react";
import { PictureOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { message, Upload, Typography, Space, Modal, Card, Row, Col } from "antd";
import PropTypes from 'prop-types';

const { Dragger } = Upload;
const { Title, Text } = Typography;

/**
 * ImageUploadPreview - A component for selecting and previewing images locally
 * 
 * @param {Object} props
 * @param {string} props.title - Title text above the upload area
 * @param {string} props.uploadText - Main text in the upload area
 * @param {string} props.hintText - Hint text below the upload area
 * @param {Function} props.onChange - Callback when files change (returns file list)
 * @param {boolean} props.multiple - Allow multiple file uploads
 * @param {number} props.maxCount - Maximum number of files
 * @param {number} props.maxSize - Maximum file size in MB
 * @param {Array} props.fileTypes - Accepted file types (e.g., ['image/jpeg', 'image/png'])
 * @param {Object} props.draggerProps - Additional props for Dragger component
 */
const ImageUploadPreview = ({
  title = "Upload Images",
  uploadText = "Click or drag images to this area to preview",
  hintText = "Support for JPG, PNG, and GIF files. Maximum size: 5MB per image.",
  onChange,
  multiple = true,
  maxCount = 5,
  maxSize = 5, // MB
  fileTypes = ['image/jpeg', 'image/png', 'image/gif'],
  draggerProps = {},
}) => {
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    onChange?.(newFileList.map(file => ({
      ...file,
      url: file.url || file.thumbUrl || file.preview
    })));
  };

  const beforeUpload = (file) => {
    // Check file type
    const isValidType = fileTypes.includes(file.type);
    if (!isValidType) {
      message.error(`${file.name} is not a valid image file. Please select ${fileTypes.join(', ')} files.`);
      return Upload.LIST_IGNORE;
    }
    
    // Check file size
    const isLessThanMaxSize = file.size / 1024 / 1024 < maxSize;
    if (!isLessThanMaxSize) {
      message.error(`Image must be smaller than ${maxSize}MB!`);
      return Upload.LIST_IGNORE;
    }
    
    // Generate preview
    getBase64(file).then(url => {
      file.preview = url;
    });
    
    return false; // Prevent actual upload
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url?.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleRemove = (file) => {
    const newFileList = fileList.filter(item => item.uid !== file.uid);
    setFileList(newFileList);
    onChange?.(newFileList.map(file => ({
      ...file,
      url: file.url || file.thumbUrl || file.preview
    })));
    return false;
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const uploadProps = {
    name: "file",
    multiple,
    maxCount,
    fileList,
    beforeUpload,
    onChange: handleChange,
    onPreview: handlePreview,
    onRemove: handleRemove,
    customRequest: ({ onSuccess }) => {
      // Mock success after 500ms to show loading state
      setTimeout(() => {
        onSuccess("ok");
      }, 500);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    listType: "picture-card",
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
      removeIcon: <DeleteOutlined />,
      previewIcon: <EyeOutlined />
    },
    ...draggerProps,
  };

  return (
    <div className="image-upload-preview">
      {title && (
        <Title level={5} style={{ marginBottom: 16 }}>{title}</Title>
      )}
      
      {fileList.length < maxCount && (
        <Dragger {...uploadProps} style={{ padding: fileList.length > 0 ? '10px 0' : '20px 0' }}>
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <p className="ant-upload-drag-icon">
              <PictureOutlined style={{ fontSize: 48, color: '#1890ff' }} />
            </p>
            <Text strong className="ant-upload-text">
              {uploadText}
            </Text>
            <Text type="secondary" className="ant-upload-hint">
              {hintText}
            </Text>
          </Space>
        </Dragger>
      )}
      
      {fileList.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <Text type="secondary" style={{ marginBottom: 8, display: 'block' }}>
            Selected Images ({fileList.length}/{maxCount})
          </Text>
          <Row gutter={[16, 16]}>
            {fileList.map(file => (
              <Col key={file.uid} xs={12} sm={8} md={6} lg={4}>
                <Card
                  hoverable
                  cover={
                    <div style={{ 
                      height: 150, 
                      overflow: 'hidden', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <img 
                        alt={file.name} 
                        src={file.url || file.thumbUrl || file.preview} 
                        style={{ width: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                  }
                  actions={[
                    <EyeOutlined key="view" onClick={() => handlePreview(file)} />,
                    <DeleteOutlined key="delete" onClick={() => handleRemove(file)} />
                  ]}
                  bodyStyle={{ padding: '8px 12px' }}
                >
                  <Card.Meta 
                    title={file.name} 
                    description={`${Math.round(file.size / 1024)} KB`}
                    style={{ 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis' 
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
      
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="Preview" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};

ImageUploadPreview.propTypes = {
  title: PropTypes.string,
  uploadText: PropTypes.string,
  hintText: PropTypes.string,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number,
  fileTypes: PropTypes.arrayOf(PropTypes.string),
  draggerProps: PropTypes.object,
};

export default ImageUploadPreview;
