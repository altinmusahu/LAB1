import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const CreateCourseForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await Axios.post('http://localhost:3001/courses', values);
      form.resetFields();
      setLoading(false);
      // history.push('/courses'); // Redirect to the courses list after successful creation
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      name="create-course-form"
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please input the category' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input the title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Image URL"
        name="imageUrl"
        rules={[{ required: true, message: 'Please input the image URL' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCourseForm;
