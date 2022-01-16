import React from 'react';
import { Card, Table, } from 'react-bootstrap';
import DeviceDetector from "device-detector-js";
import logo from './Icons/placeholder.png';

var browser;
var clientInfo;

const deviceInfo = () => {
    const deviceDetector = new DeviceDetector();
    return deviceDetector.parse(navigator.userAgent);
};

if (deviceInfo().client == null) {
    browser = "a browser"
    clientInfo = "Browser is unsupported by our apps device fingerprinter"
} else {
    browser = deviceInfo().client.name;
    clientInfo = <ClientInfo />
}

function ClientInfo () {

    return(
        <tbody>
            <tr>
                <th style={{'width': "20%"}}>Engine</th>
                <td>{deviceInfo().client.engine}</td>
            </tr>
            <tr>
                <th style={{'width': "20%"}}>Name</th>
                <td>{deviceInfo().client.name}</td>
            </tr>
            <tr>
                <th style={{'width': "20%"}}>Version</th>
                <td>{deviceInfo().client.version}</td>
            </tr>
        </tbody>
    )

}

function LandingPage( ) {

    return (
        <Card style={{'font-size': "80%"}}>
            <Card.Header as="h1"><img src={logo} alt="Logo" style={{  
                'width': "30%",
                'height': "30%"
                }}/><br />Welcome to the Rogue Captive Portal!</Card.Header>
            <Card.Body style={{'text-align': "left"}}>
                This captive portal was created using React and NodeJS and will capture device information and data you just entered into the login page. <br /><br />
                I see that you are a <b><em style={{'color': "#4bc5fa"}}>{deviceInfo().os.name} {deviceInfo().os.version}</em></b> user viewing this on <b><em style={{'color': "#4bc5fa"}}>{browser}</em></b> from a <b><em style={{'color': "#4bc5fa"}}>{deviceInfo().device.type}</em></b>, but don't worry, collected data will not be distributed or used in anyway!<br /><br />
                Here is some other information we collected from your device: <br /><br />

                <h6>Browser Information</h6>
                <Table bordered>
                    {clientInfo}
                </Table>

                <h6>Device Information</h6>
                <Table bordered>
                    <tbody>
                        <tr>
                            <th style={{'width': "20%"}}>Brand</th>
                            <td>{deviceInfo().device.brand}</td>
                        </tr>
                        <tr>
                            <th style={{'width': "20%"}}>Model</th>
                            <td>{deviceInfo().device.model}</td>
                        </tr>
                        <tr>
                            <th style={{'width': "20%"}}>Type</th>
                            <td>{deviceInfo().device.type}</td>
                        </tr>
                    </tbody>
                </Table>

                <h6>The Authors:</h6>
                <ul>
                    <li>Kenny</li>
                    <li>Stanley</li>
                    <li>Ted</li>
                    <li>Leo</li>
                    <li>Damian</li>
                    <li>Wermen</li>
                </ul>
            </Card.Body>
        </Card>
    )
 }
 
 export default LandingPage
 
