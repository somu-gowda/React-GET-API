import React from 'react'
import './Employees.css'

class Employeesid extends React.Component{
   constructor(props){
       super(props);

       this.state ={
           employees:[]
       };
   }
  componentDidMount(){
      fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json()).then(
          result=>{
              console.log(result);
              this.setState({employees:result.data})
        }
      )
  }
   render(){
       console.log(this.state.employees)
       return(
           <div >
               <h2>Employees Details..</h2>
               <table>
                   <thead >
                       <tr className="tr">
                           <th>Id</th>
                           <th>Employees_name</th>
                           <th>Employee_salary</th>  
                           <th>Employees_age</th>   
                                               
                       </tr>
                   </thead>
                   <tbody>
                        {this.state.employees.map(emp =>(
                           <tr key ={emp.id} className="tr">
                               <td>{emp.id}</td>
                               <td>{emp.employee_name}</td>
                               <td>{emp.employee_salary}</td>
                               <td>{emp.employee_age}</td>
                               
                              
                           </tr>
                       )
                       )
                       }
                   </tbody>
                  
               </table>
              
           </div>
           
            
       );
      
    }
     
}

export default Employeesid ;

