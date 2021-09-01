import { useState, useEffect } from "react";
import axios from 'axios'
import {Container, Button} from 'react-bootstrap'
import {Mainnet, Xdai, Polygon } from '../components/'

const Index = () =>{

    const [price, setPrice] = useState('')

    useEffect(async() => {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
        )
        const price = res.data.ethereum.usd
        setPrice(price)
    }, [])
    const networkConfigs = {
        1: {
          address: "0x3d5409CcE1d45233dE1D4eBDEe74b8E004abDD13",
          provider:
            "https://eth-mainnet.alchemyapi.io/v2/b7Mxclz5hGyHqoeodGLQ17F5Qi97S7xJ",
        },
        100: {
          address: "0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863",
          provider: "https://rpc.xdaichain.com/",
        },
        137: {
          address: "0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863",
          provider:
            "https://snowy-weathered-waterfall.matic.quiknode.pro/5b11a0413a62a295070c0dfb25637d5f8c591aba/",
        },
      };
    return(
        <>

          <Container className="mt-4 mb-5">
            
                <img 
                    src="./Unlock-WordMark.png" 
                    alt="unlock" 
                    width='30%'
                    height='15%'
                    className="text-black bold mb-3"    
                />Dashboard
                <br/>
                <Button href="https://dune.xyz/manyrios56/Unlock-Eth" target="_blank" variant="outline-danger">
                    Set time intervals in dune
                </Button>
           
         
            <Mainnet price={price} network={networkConfigs[1]}/>
            <Xdai price={price} network={networkConfigs[100]}/>
            <Polygon price={price} network={networkConfigs[137]}/>
          </Container>
            
          
        </>

    )

}

  export default Index