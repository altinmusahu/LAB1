import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { addNewCourse } from 'C:\\Users\\Aurora\\OneDrive\\Desktop\\ProjekteUBT\\Learnfy\\server\\CoursesCrud.js'; 

const AddCourseForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await addNewCourse(values);
      form.resetFields();
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <Form.Item
        label="Course Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please enter a course name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Course Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please enter a course description',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add Course
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCourseForm;
