import {useState, useEffect } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import {ethers} from 'ethers'
import Iframe from "react-iframe";


const Mainnet = ({price, network}) => {

    const [state, setstate] = useState()
    const [total, setTotal] = useState()

  const linksUp = [
    "https://dune.xyz/embeds/88508/188926/8748ffd5-abbd-4164-8566-89004ccaae1b",
    "https://dune.xyz/embeds/93497/197243/1f981cd6-c9b3-44c5-a02a-dcad8f89f975", 
  ];
  const linksDown = [
    'https://dune.xyz/embeds/94258/188185/9a4daabc-96dd-4907-a9b1-6c66ff85c9c6',
    'https://dune.xyz/embeds/94258/250186/12d0e993-8554-44d9-8e81-4f6f625f8735',
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

  return(
    <>
      <h2 className="bg-light w-100 p-2 mt-3 ">Ethereum Mainnet</h2>
      <Row className="text-center mt-4 justify-center">
        <Col md={4} className="h-100 text-center">
            <Card className="w-100 px-3  py-5 ">
    
                <Card.Title>Total GDP</Card.Title>
                <Card.Text>{`${state} `}<span className="bold">ETH</span></Card.Text>
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
export default Mainnet;
