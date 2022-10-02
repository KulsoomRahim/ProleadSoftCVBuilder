import React from 'react'
import "./App.css";
import "antd/dist/antd.css";
import { Form, Button, Input, Space } from 'antd'; //Importing FOrm componet
import {PlusOutlined} from '@ant-design/icons'
import {MinusCircleOutlined} from '@ant-design/icons'


export default function App() {

	return (
		<div className="App">
			<h4>ProleadSoft CV Builder</h4>
			<Form>
			<Form.Item
			label="First Name"
			name={"FirstName"}
	
			>
			<Input placeholder='First Name'/>
			</Form.Item>

      <Form.Item
			label="Last Name"
			name={"LastName"}
	
			>
			<Input placeholder='Last Name'/>
			</Form.Item>


      <Form.Item
			label="Academic History"
			name={"AcademicExperience"}
      
	rules={[{required:true,message:"Academic History field should be filled"}]}
			>
			<Input placeholder='Academic History'/>
			</Form.Item>
      <Form.Item
			label="Work History"
			name={"WorkExperience"}
      
	rules={[{required:true,message:"Work Expereince field should be filled"}]}
			>
			<Input placeholder='Work Experience'/>
			</Form.Item>
<Form.List name={"experiences"}>
{(fields,{add,remove})=>
//looping through fields number as added by user 
<>

{fields.map((field,index)=>{
	
return(

  <Space direction='horizontal' size={12} key={field.key} > 

      <Form.Item	
      
      name={[field.name,"first" ]} // unique name for each looping index
      label={`${index+1}-Work Experience`}
			>
			<Input placeholder='Organization'/>
			</Form.Item>

      <Form.Item	
       
      name={[field.name,"Designation" ]}// unique name for each looping index
     
			>
			<Input placeholder='Designation'/>
			</Form.Item>
      <MinusCircleOutlined style={{height:40,color:"red"}} onClick={()=>{

remove(field.name);// able to remove the work expereince 
}} />


<Form.Item
			label="Academic History"
			name={"AcademicExperience"}
      
	rules={[{required:true,message:"Academic History field should be filled"}]}
			>
			<Input placeholder='Academic History'/>
			</Form.Item>

</Space>



)




})}
<Form.Item>
<Button icon={<PlusOutlined/>}type="dashed" block onClick={()=>{

add();// able to add the work expereince 
}} >Add another Work Experience</Button>

  
</Form.Item>
</>





}

</Form.List>











			
			<Button type="primary" htmlType="submit">
        Submit
			</Button> 
			</Form> 
		</div>
	);
}
