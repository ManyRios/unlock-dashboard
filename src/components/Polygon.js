import {useState, useEffect } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import {ethers} from 'ethers'
import Iframe from "react-iframe";


const Polygon = ({price, network}) => {

    const [state, setstate] = useState()
    const [total, setTotal] = useState()

  const linksUp = [
    "https://dune.xyz/embeds/117529/238077/7f590531-9c11-4967-b0a0-af6ae80ddf50",
    "https://dune.xyz/embeds/102790/208411/3810519c-af0f-4825-ab05-0c2a4805233d", 
  ];
  const linksDown = [
    'https://dune.xyz/embeds/117962/238082/9daaabf4-c07e-4d86-b9c7-8179accfde43',
    'https://dune.xyz/embeds/117962/250190/75905352-6d13-4b54-8a87-f93e5019205e',
  ]

  const getGdpForNetwork = async (network) => {
    const abi = [
      "function grossNetworkProduct() constant view returns (uint256)",
    ];

    const provider = new ethers.providers.JsonRpcProvider(network.provider);

    const contract = new ethers.Contract(network.address, abi, provider);

    return await contract.grossNetworkProduct();
  };
  

  useEffect(async () => {
    const gdp = await getGdpForNetwork(network)
    const total = ethers.utils.formatUnits(gdp, '18')
    setstate(total)
    const inUsd = total * price
    setTotal(inUsd)
  }, [])

  return (
    <>
      <h2 className="bg-light w-100 p-2 mt-3 ">Polygon Network</h2>
      <Row className="text-center mt-4 justify-center">
        <Col md={4} clasName="h-100 text-center">
            <Card className="w-100 px-3  py-5 ">
    
                <Card.Title>Total GDP</Card.Title>
                <Card.Text>{`${state} `}<span className="bold">ETH</span></Card.Text>
                {console.log('mainnet', price)}
                <Card.Title>Total USD</Card.Title>
                <Card.Text>{total}</Card.Text>
            </Card>
        </Col>

        {linksUp.map((i) => {
          return (
            <Col md={4} key={i} className="h-100 px-3">
              <Iframe
                url={i}
                width="400px"
                height="300px"
                id="myId"
                className="myClassname"
                position="relative"
                as="image"
              />
            </Col>
          );
        })}
      </Row>
      <Row className="d-flex text-center justify-center">
        {
            linksDown.map( i => {
              return( 
                <Col md={6} key={i} className="h-100 px-3">
                <Iframe
                  url={i}
                  width="500px"
                  height="300px"
                  id="myId"
                  className="myClassname"
                  position="relative"
                  as="image"
                />
              </Col>
            )})
        }
      </Row>
    </>
  );
};
export default Polygon;
