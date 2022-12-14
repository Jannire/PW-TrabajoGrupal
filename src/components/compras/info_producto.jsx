import "./info_producto.css";
import Header from '../header_todos';

const InfoProducto = () => 
{
    return (
        <div>
            <Header/>
            <div className="container">
                <div id="data" className="d-flex justify-content-around flex-md-row flex-column">
                    <div id="fond_inv" className="col rounded row mt-5">
                        <div>
                            <img id="inv" className="rounded img-fluid" src="https://store-images.s-microsoft.com/image/apps.20966.13599037783181022.b05b7adf-6b7a-44ae-9a70-9dc9370ea7e6.4cd88c60-6ff1-4b0f-aed6-8e2efa5629c1" alt="" />
                        </div>
                        <span id="sp-bot">
                            <button id="addCart" className="btn m-3">
                                Add to the cart
                            </button>
                        </span>
                    </div>
                    <div id="gato" className="col mt-5 rounded">
                        <h1 className="text-white">NVIDIA GEFORCE GTX 1650 4GB</h1>
                        <b className="text-white">$200</b>
                        <p className="text-white"> <span className="text-success">Shipping</span> calculated at checkout</p>
                        <table id="func" className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row"> CHIPSET MANUFACTERER </th>
                                    <td>NVIDIA</td>
                                </tr>
                                <tr>
                                    <th scope="row"> GPU </th>
                                    <td>GeForce GTX 1650</td>
                                </tr>
                                <tr>
                                    <th scope="row"> CORE CLOCK </th>
                                    <td>1530 MHz</td>
                                </tr>
                                <tr>
                                    <th scope="row"> BOOST CLOCK </th>
                                    <td>OC Mode: 1800 MHz Gaming Mode (Default): 1770 MHz</td>
                                </tr>
                                <tr>
                                    <th scope="row"> CUDA CORES </th>
                                    <td>1280</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProducto;    