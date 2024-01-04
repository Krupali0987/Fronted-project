import React from 'react';
import { Form, Checkbox } from 'antd';
import TextField from '../../../Components/Inputs/TextField';
import CustomButton from '../../../Components/Buttons/Button';
import SubHeading from '../../../Components/SubHeadings/SubHeading';
import { useForm } from 'antd/es/form/Form';
console.log(Form);
const LoginForm = () => {
    const form = useForm();
    console.log('=============form=========', form);
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img
                        src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
                        alt="Login"
                    />
                </div>
                <div className="form-div">
                    <Form
                        name="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <p className="form-title">Sign In</p>
                        <div className="mb-5 ">
                            <SubHeading>
                                Continue using assigning Features
                            </SubHeading>
                            <SubHeading>Select System</SubHeading>
                            <div className="flex">
                                <CustomButton
                                    style={{
                                        backgroundColor: '#989898',
                                        paddingInline: '10px',
                                    }}
                                    className="mr-3"
                                    type="primary"
                                    title="Agency Bolt"
                                />
                                <CustomButton
                                    style={{
                                        // backgroundColor: '#989898',
                                        paddingInline: '10px',
                                    }}
                                    type="primary"
                                    title="MGA Bolt"
                                />
                            </div>            
                        </div>
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <TextField placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            label="password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <TextField type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <CustomButton
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{ width: '100%', height: '60px' }}
                                title="Sign In"
                            />
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
