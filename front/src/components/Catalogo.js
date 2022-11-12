import React from "react";

class Catalogo extends React.Component{
    render(){
        return(
            <div class="container">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody id="myTable">
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@mail.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@greatstuff.com</td>
                </tr>
                <tr>
                    <td>Anja</td>
                    <td>Ravendale</td>
                    <td>a_r@test.com</td>
                </tr>
                </tbody>
            </table>
            </div>

        );
    }
}


export default Catalogo;