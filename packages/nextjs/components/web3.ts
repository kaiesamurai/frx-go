import Web3 from 'web3';

let web3: Web3;

if (typeof window !== 'undefined' && window.ethereum !== undefined) {
    // We are in the browser and MetaMask is running.
    web3 = new Web3(window.ethereum);
    try {
        window.ethereum.request({ method: 'eth_requestAccounts' }); // Prompt user to enable MetaMask
    } catch (error) {
        console.error('User denied account access', error);
    }
} else {
    // We are on the server or the user is not running MetaMask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/YOUR_INFURA_API_KEY'
    );
    web3 = new Web3(provider);
}

export default web3;
