import React from "react";

class Catalogo extends React.Component{
    render(){
        return(
            <div class="container">
            <form action="/action_page.php">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Agregar</th>
                </tr>
                </thead>
                <tbody id="myTable">
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <td>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@mail.com</td>
                    <td>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check2" name="option2" value="something" />
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@greatstuff.com</td>
                    <td>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check3" name="option3" value="something" />
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Anja</td>
                    <td>Ravendale</td>
                    <td>a_r@test.com</td>
                    <td>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check4" name="option4" value="something" />
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
            </div>

        );
    }
}


export default Catalogo;