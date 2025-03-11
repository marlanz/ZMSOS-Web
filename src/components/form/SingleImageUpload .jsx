import { useState } from "react";
import {
  PictureOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { message, Upload, Typography, Space, Modal, Button } from "antd";
import PropTypes from "prop-types";

const { Title, Text } = Typography;

/**
 * SingleImageUpload - A component for selecting and previewing a single image locally
 *
 * @param {Object} props
 * @param {string} props.title - Title text above the upload area
 * @param {string} props.uploadText - Main text in the upload area
 * @param {string} props.hintText - Hint text below the upload area
 * @param {Function} props.onChange - Callback when image changes (returns file object)
 * @param {number} props.maxSize - Maximum file size in MB
 * @param {Array} props.fileTypes - Accepted file types (e.g., ['image/jpeg', 'image/png'])
 */
const SingleImageUpload = ({
  title = "Upload Animal Type Image",
  uploadText = "Click or drag image to this area to preview",
  hintText = "Support for JPG, PNG, and GIF files. Maximum size: 5MB.",
  onChange,
  maxSize = 5, // MB
  fileTypes = ["image/jpeg", "image/png", "image/gif"],
}) => {
  const [imageFile, setImageFile] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleChange = (info) => {
    console.log("info:::::", info);
    if (info.file.status === "uploading") {
      return;
    }

    if (info.file.status === "done" || info.file.status === "error") {
      setImageFile(info.file);
      onChange?.(info.file);
    }
  };

  const beforeUpload = (file) => {
    console.log("beforeUpload::",file);
    // Check file type
    const isValidType = fileTypes.includes(file.type);
    if (!isValidType) {
      message.error(
        `${file.name} is not a valid image file. Please select ${fileTypes.join(
          ", "
        )} files.`
      );
      return Upload.LIST_IGNORE;
    }

    // Check file size
    const isLessThanMaxSize = file.size / 1024 / 1024 < maxSize;
    if (!isLessThanMaxSize) {
      message.error(`Image must be smaller than ${maxSize}MB!`);
      return Upload.LIST_IGNORE;
    }

    // Generate preview
    getBase64(file).then((url) => {
      // Preserve the original file properties and add the preview URL
      const updatedFile = {
        name: file.name, 
        uid: file.uid, 
        size: file.size, 
        type: file.type,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate, 
        preview: url,
        url: url, 
      };

      updatedFile.status = "done";
      console.log( "when get base 64:::",updatedFile);
      // Update state
      setImageFile(updatedFile);

      onChange?.(updatedFile);
    });

    return false;
  };

  const handlePreview = () => {
    if (!imageFile) return;

    setPreviewImage(imageFile.url || imageFile.preview);
    setPreviewOpen(true);
    setPreviewTitle(imageFile.name);
  };

  const handleRemove = () => {
    setImageFile(null);
    onChange?.(null);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload,
    onChange: handleChange,
    customRequest: ({ onSuccess }) => {
      // Mock success after 500ms to show loading state
      setTimeout(() => {
        onSuccess("ok");
      }, 500);
    },
    onDrop(e) {
      console.log("Dropped file", e.dataTransfer.files[0]);
    },
  };

  return (
    <div className="single-image-upload">
      {title && (
        <Title level={5} style={{ marginBottom: 16 }}>
          {title}
        </Title>
      )}

      {!imageFile ? (
        <Upload.Dragger {...uploadProps} style={{ padding: "20px 0" }}>
          <Space direction="vertical" size={8} style={{ width: "100%" }}>
            <p className="ant-upload-drag-icon">
              <PictureOutlined style={{ fontSize: 48, color: "#1890ff" }} />
            </p>
            <Text strong className="ant-upload-text">
              {uploadText}
            </Text>
            <Text type="secondary" className="ant-upload-hint">
              {hintText}
            </Text>
          </Space>
        </Upload.Dragger>
      ) : (
        <div
          className="image-preview-container"
          style={{ position: "relative" }}
        >
          <div
            className="image-preview"
            style={{
              border: "1px dashed #d9d9d9",
              borderRadius: "8px",
              padding: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={imageFile.url || imageFile.preview}
              alt={imageFile.name}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "contain",
                display: "block",
                borderRadius:"8px",
              }}
            />

            <div
              className="image-actions"
              style={{
                marginTop: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text ellipsis style={{ maxWidth: "70%" }} title={imageFile.name}>
                {imageFile.name} ({Math.round(imageFile.size / 1024)} KB)
              </Text>

              <Space>
                <Button
                  icon={<EyeOutlined />}
                  size="small"
                  onClick={handlePreview}
                >
                  Preview
                </Button>
                <Button
                  icon={<DeleteOutlined />}
                  size="small"
                  danger
                  onClick={handleRemove}
                >
                  Remove
                </Button>
              </Space>
            </div>
          </div>

          <Upload {...uploadProps} style={{ display: "none" }}>
            <Button
              icon={<PlusOutlined />}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #d9d9d9",
                padding: 0,
              }}
            />
          </Upload>
        </div>
      )}

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
        width="100%"
        style={{
          top: 0,
          maxWidth: "100vw",
          padding: 0,
          zIndex: 1001,
        }}
        bodyStyle={{
          height: "calc(100vh - 55px)",
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      >
        <img
          alt="Preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
            filter: "brightness(1.1)",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};

SingleImageUpload.propTypes = {
  title: PropTypes.string,
  uploadText: PropTypes.string,
  hintText: PropTypes.string,
  onChange: PropTypes.func,
  maxSize: PropTypes.number,
  fileTypes: PropTypes.arrayOf(PropTypes.string),
};

export default SingleImageUpload;
