import {useState, useEffect } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import {ethers} from 'ethers'
import Iframe from "react-iframe";


const Xdai = ({price, network}) => {

    const [state, setstate] = useState()
    const [total, setTotal] = useState()

    const linksUp = [
      "https://dune.xyz/embeds/99721/201363/d033fd4b-32bb-43f1-9694-498faf97765c",
      "https://dune.xyz/embeds/101886/205717/e15cb4f7-8fce-4614-a3cb-3285b8858646", 
    ];
    const linksDown = [
      'https://dune.xyz/embeds/117535/237420/9b56d061-590f-496a-bdf2-ca5a530d069d',
      'https://dune.xyz/embeds/117535/250188/77863a05-a5f3-4100-a290-5e80269133e7',
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
      <h2 className="bg-light w-100 p-2 mt-3 ">Xdai Network</h2>
      <Row className="text-center mt-4 justify-center">
        <Col md={4} className="h-100 text-center">
            <Card className="w-100 px-3  py-5 ">
    
                <Card.Title>Total GDP</Card.Title>
                <Card.Text>{`${state} `}<span className="bold">DAI</span></Card.Text>
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


export default Xdai;


/*
 const linksUp = [
    "https://dune.xyz/embeds/99721/201363/d033fd4b-32bb-43f1-9694-498faf97765c",
    "https://dune.xyz/embeds/101886/205717/e15cb4f7-8fce-4614-a3cb-3285b8858646", 
  ];
  const linksDown = [
    'https://dune.xyz/embeds/117535/237420/9b56d061-590f-496a-bdf2-ca5a530d069d',
    'https://dune.xyz/embeds/117535/250188/77863a05-a5f3-4100-a290-5e80269133e7',
  ]
*/
