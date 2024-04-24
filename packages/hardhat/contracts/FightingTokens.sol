// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract FightingTokens is ERC20, Ownable, ERC20Permit {
    constructor()
        ERC20("FightingTokens", "FT")
        Ownable()
        ERC20Permit("FightingTokens")
    {
        _mint(msg.sender, 9001 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
