import React from 'react'
import "./App.css";
import "antd/dist/antd.css";
import { Form, Button, Input, Space } from 'antd'; //Importing FOrm componet
import { PlusOutlined } from '@ant-design/icons'
import { MinusCircleOutlined } from '@ant-design/icons'
import {
  
    useNavigate,
    
  } from "react-router-dom";

export default function App() {
	let navigate=useNavigate();
	const onFinish = (values) => {
		console.log("submitted", values);
		console.log(JSON.stringify(values));// saving values in local storage  submitted by user to pass in tables component 
		window.localStorage.setItem('cvDetails', JSON.stringify(values));
		
		navigate("/dragdropUtility")

	};
	return (
		<div className="App">
			<h4>ProleadSoft CV builder</h4>
			<Form onFinish={onFinish}
			>
				<Form.Item
					label="First Name"
					name={"FirstName"}
				>
					<Input placeholder='First Name' />
				</Form.Item>

				<Form.Item
					label="Last Name"
					name={"LastName"}

				>
					<Input placeholder='Last Name' />
				</Form.Item>

				<Form.Item
					label="Academic History"
					name={"AcademicExperience"}

					rules={[{ required: true, message: "Academic History field should be filled" }]}
				>
					<Input placeholder='Academic History' />
				</Form.Item>

				<Form.Item
					label="Work History"
					name={"WorkExperience"}

					rules={[{ required: true, message: "Work Expereince field should be filled" }]}
				>
					<Input placeholder='Work Experience' />
				</Form.Item>

			

				<Form.Item
				// wrapperCol={{
				//   offset: 8,
				//   span: 16,
				// }}
				>
					<Button type="primary" htmlType="submit" 
					// onClick={() =>  navigate("/dragdropUtility")}
					>
						Submit
					</Button>
				</Form.Item>

				{/* 
				 onClick={() => navigate("/dragdropUtility")}
				 <Button type="primary" htmlType="submit">
					Submit
				</Button> */}
			</Form>
		</div>
	);
}
