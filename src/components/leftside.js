
function LeftSide() {
  return (

        <div className="leftside">
            <div className="filter">
                <input type="text" placeholder="Filters"/>
                <div className="selects">
                    <select name="product"id="product">
                        <option value="volvo">Products</option>
                        <option value="saab">Raills</option>
                        <option value="opel">Alphabet</option>
                      </select>
                    <select disabled name="cars" id="cars">
                        <option value="volvo">State</option>
  
                      </select>
                    <select name="cars" id="cars">
                        <option value="volvo">City</option>
                      </select>
                </div>
            </div>  
        </div>
  );
}

export default LeftSide;

