(this.webpackJsonpscatter = this.webpackJsonpscatter || []).push([
    [0], {
        207: function(e, t) {},
        231: function(e, t) {},
        240: function(e, t) {},
        258: function(e, t) {},
        260: function(e, t) {},
        281: function(e, t) {},
        283: function(e, t) {},
        287: function(e, t) {},
        288: function(e, t) {},
        324: function(e, t) {},
        326: function(e, t) {},
        371: function(e, t) {},
        372: function(e, t) {},
        441: function(e, t) {},
        443: function(e, t) {},
        448: function(e, t) {},
        450: function(e, t) {},
        457: function(e, t) {},
        469: function(e, t) {},
        472: function(e, t) {},
        477: function(e, t) {},
        514: function(e, t) {},
        515: function(e, t) {},
        516: function(e, t, n) {},
        517: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, s = n(3),
                c = n.n(s),
                r = n(78),
                o = n.n(r),
                i = n(12),
                l = n.n(i),
                d = n(19),
                u = n(79),
                b = n(2),
                p = n(29),
                h = n(209),
                m = n.n(h),
                j = {
                    1: {
                        symbol: "ETH",
                        name: "Ethereum",
                        networkName: "Ethereum",
                        type: "mainnet",
                        explorer: {
                            name: "etherscan",
                            url: "https://etherscan.io/"
                        },
                        chainId: 1,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(1, 10).toString(16)),
                            chainName: "Ethereum Mainnet",
                            nativeCurrency: {
                                name: "Ethereum Mainnet",
                                symbol: "ETH",
                                decimals: 18
                            },
                            rpcUrls: ["https://rpc.ankr.com/eth"],
                            blockExplorerUrls: ["https://etherscan.io/"]
                        },
                        multicallAddress: "0x5Eb3fa2DFECdDe21C950813C665E9364fa609bD2",
                        contractAddress: "0x4Ba7b3a95959b4BA085B8D4A84379e3AC63deDd4"
                    },
                    10001: {
                        symbol: "ETHW",
                        name: "Ethereum POW",
                        networkName: "Ethereum POW",
                        type: "mainnet",
                        explorer: {
                            name: "ethwscan",
                            url: "https://mainnet.ethwscan.com/"
                        },
                        chainId: 10001,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(10001, 10).toString(16)),
                            chainName: "Ethereum POW",
                            nativeCurrency: {
                                name: "Ethereum Mainnet",
                                symbol: "ETHW",
                                decimals: 18
                            },
                            rpcUrls: ["https://mainnet.ethereumpow.org"],
                            blockExplorerUrls: ["https://mainnet.ethwscan.com/"]
                        },
                        multicallAddress: "0x5Eb3fa2DFECdDe21C950813C665E9364fa609bD2",
                        contractAddress: "0x4Ba7b3a95959b4BA085B8D4A84379e3AC63deDd4"
                    },
                    137: {
                        symbol: "MATIC",
                        name: "MATIC",
                        networkName: "POLYGON",
                        type: "mainnet",
                        explorer: {
                            name: "polygonscan",
                            url: "https://polygonscan.com"
                        },
                        chainId: 137,
                        contractAddress: "0x0E3e12112Be56625C36EDF62aF0ff8Fc221d9D60",
                        multicallAddress: "0xC3821F0b56FA4F4794d5d760f94B812DE261361B",
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(137, 10).toString(16)),
                            chainName: "Polygon Mainnet",
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18
                            },
                            rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
                            blockExplorerUrls: ["https://polygonscan.com/"]
                        }
                    },
                    56: {
                        symbol: "BNB",
                        name: "BSC",
                        networkName: "BSC",
                        type: "mainnet",
                        explorer: {
                            name: "bscscan",
                            url: "https://bscscan.com"
                        },
                        chainId: 56,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(56, 10).toString(16)),
                            chainName: "BSC Mainnet",
                            nativeCurrency: {
                                name: "Binance Coin",
                                symbol: "BNB",
                                decimals: 18
                            },
                            rpcUrls: ["https://bsc-dataseed.binance.org"],
                            blockExplorerUrls: ["https://bscscan.com/"]
                        },
                        contractAddress: "0x5b7df34c9Ae0D587A7802779733ABD3769B88b54",
                        multicallAddress: "0xB94858b0bB5437498F5453A16039337e5Fdc269C"
                    },
                    16666e5: {
                        symbol: "ONE",
                        name: "HARMONY",
                        networkName: "HARMONY",
                        type: "mainnet",
                        explorer: {
                            name: "harmony-explorer",
                            url: "https://explorer.harmony.one"
                        },
                        chainId: 16666e5,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(16666e5, 10).toString(16)),
                            chainName: "Harmony Mainnet",
                            nativeCurrency: {
                                name: "Harmony coin",
                                symbol: "ONE",
                                decimals: 18
                            },
                            rpcUrls: ["https://api.harmony.one"],
                            blockExplorerUrls: ["https://explorer.harmony.one/"]
                        },
                        contractAddress: "0x62C3506c089c8291f6d432d7F380bD59cdc2AAA5",
                        multicallAddress: "0xE3840856a94bB12Bde4951aeF796B56C4Cd915D9"
                    },
                    97: {
                        symbol: "BNB",
                        name: "BSC",
                        networkName: "BSC testnet",
                        type: "testnet",
                        explorer: {
                            name: "bscscan",
                            url: "https://testnet.bscscan.com/"
                        },
                        chainId: 97,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(97, 10).toString(16)),
                            chainName: "BSC testnet",
                            nativeCurrency: {
                                name: "BSC Testnet",
                                symbol: "BSC",
                                decimals: 18
                            },
                            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
                            blockExplorerUrls: ["https://testnet.bscscan.com/"]
                        },
                        multicallAddress: "0xd22cc9d6DB74c23d083a32Ec0b4D23Da25D95Db8",
                        contractAddress: "0xEFDcC78F733ac025F3b9eFBa186c315bAe2Bb3eF"
                    },
                    4: {
                        symbol: "ETH",
                        name: "Rinkeby ETH",
                        networkName: "Rinkeby ETH",
                        type: "testnet",
                        explorer: {
                            name: "etherscan",
                            url: "https://rinkeby.etherscan.io"
                        },
                        chainId: 4,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(4, 10).toString(16)),
                            chainName: "Rinkeby Test Network",
                            nativeCurrency: {
                                name: "Rinkeby Test Network",
                                symbol: "ETH",
                                decimals: 18
                            },
                            rpcUrls: ["https://main-light.eth.linkpool.io/"],
                            blockExplorerUrls: ["https://rinkeby.etherscan.io/"]
                        },
                        multicallAddress: "0x31305e122b01EB35F695Ce3F6fFB15F0138a17cD",
                        contractAddress: "0xcE044d06b439f6fEBe8c97B80f045eA8867cf3B0"
                    },
                    3: {
                        symbol: "ETH",
                        name: "Ropsten ETH",
                        networkName: "Ropsten ETH",
                        type: "testnet",
                        explorer: {
                            name: "etherscan",
                            url: "https://ropsten.etherscan.io/"
                        },
                        chainId: 3,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(3, 10).toString(16)),
                            chainName: "Ropsten Test Network",
                            nativeCurrency: {
                                name: "Ropsten Test Network",
                                symbol: "ETH",
                                decimals: 18
                            },
                            rpcUrls: ["https://rinkeby-light.eth.linkpool.io"],
                            blockExplorerUrls: ["https://ropsten.etherscan.io/"]
                        },
                        multicallAddress: "0x116b6Fff19f7Cf4D3A183a705C42434fb0e496d3",
                        contractAddress: "0xE3840856a94bB12Bde4951aeF796B56C4Cd915D9"
                    },
                    80001: {
                        symbol: "MATIC",
                        name: "Matic Mumbai",
                        networkName: "Matic Mumbai",
                        type: "testnet",
                        explorer: {
                            name: "etherscan",
                            url: "https://mumbai.polygonscan.com/"
                        },
                        chainId: 80001,
                        rpcSettings: {
                            chainId: "0x".concat(parseInt(3, 10).toString(16)),
                            chainName: "Matic Mumbai Test Network",
                            nativeCurrency: {
                                name: "Matic Mumbai",
                                symbol: "MATIC",
                                decimals: 18
                            },
                            rpcUrls: ["https://rpc-mumbai.matic.today"],
                            blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                        },
                        multicallAddress: "0x116b6Fff19f7Cf4D3A183a705C42434fb0e496d3",
                        contractAddress: "0xE3840856a94bB12Bde4951aeF796B56C4Cd915D9"
                    }
                },
                f = n(14),
                x = n.n(f),
                O = n(18),
                y = (n(508), ["title", "titleId"]);

            function v() {
                return (v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function g(e, t) {
                if (null == e) return {};
                var n, a, s = function(e, t) {
                    if (null == e) return {};
                    var n, a, s = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                }
                return s
            }

            function w(e, t) {
                var n = e.title,
                    c = e.titleId,
                    r = g(e, y);
                return s.createElement("svg", v({
                    id: "svg",
                    width: 50,
                    height: 50,
                    viewBox: "0 0 400 400",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    style: {
                        display: "block"
                    },
                    ref: t,
                    "aria-labelledby": c
                }, r), n ? s.createElement("title", {
                    id: c
                }, n) : null, a || (a = s.createElement("g", {
                    id: "svgg"
                }, s.createElement("path", {
                    id: "path0",
                    d: "M196.423 21.530 C 195.612 23.471,171.105 64.622,141.963 112.977 C 112.821 161.331,88.735 201.528,88.437 202.304 C 88.050 203.313,103.882 213.162,143.951 236.838 L 200.008 269.960 256.049 236.820 C 296.310 213.011,311.937 203.279,311.546 202.259 C 309.521 196.981,200.545 18.000,199.356 18.000 C 198.554 18.000,197.234 19.588,196.423 21.530 M88.570 226.125 C 90.730 229.818,199.545 382.920,200.000 382.906 C 200.752 382.883,312.004 225.671,311.574 225.240 C 311.168 224.835,207.179 286.081,202.841 289.280 L 200.182 291.242 146.341 259.454 C 116.728 241.971,91.406 226.961,90.070 226.100 C 87.855 224.673,87.722 224.675,88.570 226.125 ",
                    stroke: "none",
                    fill: "aquamarine",
                    fillRule: "evenodd"
                }))))
            }
            var k = s.forwardRef(w),
                N = (n.p, n(0)),
                C = function(e) {
                    var t = e.state.networkId,
                        n = j[t] || null;
                    return Object(N.jsx)("module", {
                        children: Object(N.jsxs)("div", {
                            className: "header",
                            children: [Object(N.jsx)("logo", {
                                children: Object(N.jsx)(k, {})
                            }), Object(N.jsxs)("h1", {
                                children: ["Tadebu Sender ", Object(N.jsx)("sup", {
                                    children: n ? n.name + " " + n.type : "\ud83e\udd14"
                                })]
                            }), Object(N.jsx)("div", {
                                className: "expand"
                            }), Object(N.jsxs)("div", {
                                children: [n ? Object(N.jsx)("a", {
                                    target: "_blank",
                                    href: n.explorer.url,
                                    children: n.explorer.name
                                }) : null, Object(N.jsx)("a", {
                                    href: "#tadebutelegram",
                                    target: "_blank",
                                    children: "telegram"
                                })]
                            })]
                        })
                    })
                },
                A = function(e) {
                    var t = e.state,
                        n = t.address,
                        a = t.isInjected,
                        s = t.connected,
                        c = t.networkId,
                        r = Object.keys(j).map((function(e) {
                            return j[e]
                        })),
                        o = function() {
                            var e = Object(d.a)(l.a.mark((function e(t) {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, window.ethereum.request({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: j[t].rpcSettings.chainId
                                                }]
                                            });
                                        case 3:
                                            e.next = 10;
                                            break;
                                        case 5:
                                            if (e.prev = 5, e.t0 = e.catch(0), 4902 !== e.t0.code) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 10, window.ethereum.request({
                                                method: "wallet_addEthereumChain",
                                                params: [j[t].rpcSettings]
                                            });
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 5]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(N.jsx)("module", {
                        children: Object(N.jsx)("div", {
                            className: "connection",
                            children: function() {
                                switch (!0) {
                                    case 0 == a:
                                        return Object(N.jsxs)(N.Fragment, {
                                            children: [Object(N.jsx)("h2", {
                                                children: "Metamask Required"
                                            }), Object(N.jsx)("p", {
                                                children: "non-ethereum browser, consider installing metamask."
                                            })]
                                        });
                                    case 0 == s:
                                        return Object(N.jsxs)(N.Fragment, {
                                            children: [Object(N.jsx)("h2", {
                                                children: "Please connect Metamask - "
                                            }), Object(N.jsx)("p", {
                                                children: Object(N.jsx)("input", {
                                                    type: "submit",
                                                    value: "connect",
                                                    onClick: function() {
                                                        return e.connectWallet(window.ethereum)
                                                    }
                                                })
                                            })]
                                        });
                                    case 1 == s && 0 != c:
                                        return Object(N.jsxs)(N.Fragment, {
                                            children: [Object(N.jsx)("h2", {
                                                children: "Połączony"
                                            }), Object(N.jsxs)("p", {
                                                children: ["połączony z portfela ", n]
                                            })]
                                        });
                                    case 1 == s && 0 == c:
                                        return Object(N.jsxs)(N.Fragment, {
                                            children: [Object(N.jsx)("h2", {
                                                children: "unsupported network"
                                            }), Object(N.jsxs)("p", {
                                                className: "small-caps",
                                                children: ["scatter currently supports", " ", r.map((function(e, t) {
                                                    return Object(N.jsxs)("span", {
                                                        children: [Object(N.jsx)("span", {
                                                            className: "network-name",
                                                            onClick: function() {
                                                                return o(e.chainId)
                                                            },
                                                            children: e.networkName
                                                        }), ",", " "]
                                                    }, t)
                                                })), " ", "networks"]
                                            })]
                                        });
                                    default:
                                        return Object(N.jsx)("h1", {
                                            children: "Yo"
                                        })
                                }
                            }()
                        })
                    })
                },
                B = function(e) {
                    var t = e.state,
                        n = t.selectedToken,
                        a = t.networkId,
                        s = t.mainBalance,
                        c = e.setState,
                        r = function(e) {
                            c((function(t) {
                                return Object(b.a)(Object(b.a)({}, t), {}, {
                                    selectedToken: e.target.value == n ? null : e.target.value
                                })
                            }))
                        },
                        o = j[a];
                    return Object(N.jsx)("module", {
                        children: Object(N.jsxs)("div", {
                            className: "token-selector",
                            children: [Object(N.jsxs)("div", {
                                className: "chooser",
                                onChange: r,
                                children: [Object(N.jsx)("label", {
                                    children: "wyślij"
                                }), Object(N.jsx)("input", {
                                    type: "radio",
                                    value: "ether",
                                    name: "token-selector",
                                    id: "ether",
                                    checked: "ether" == n,
                                    onClick: r,
                                    readOnly: !0
                                }), Object(N.jsx)("label", {
                                    htmlFor: "ether",
                                    children: o.symbol
                                }), " ", Object(N.jsx)("label", {
                                    children: "lub"
                                }), Object(N.jsx)("input", {
                                    type: "radio",
                                    value: "token",
                                    name: "token-selector",
                                    id: "token",
                                    checked: "token" == n,
                                    onClick: r,
                                    readOnly: !0
                                }), Object(N.jsx)("label", {
                                    htmlFor: "token",
                                    children: "token"
                                })]
                            }), !("ether" != n) && Object(N.jsxs)("p", {
                                children: ["posiadasz", Object(N.jsxs)("amount", {
                                    symbol: "USDC",
                                    decimals: "6",
                                    children: [Object(N.jsxs)("span", {
                                        children: [" ", s, " "]
                                    }), Object(N.jsx)("span", {
                                        className: "sc",
                                        children: o.symbol
                                    })]
                                })]
                            })]
                        })
                    })
                },
                E = n(212),
                S = [{
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_spender",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_from",
                        type: "address"
                    }, {
                        name: "_to",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "_owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "balance",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_to",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "_owner",
                        type: "address"
                    }, {
                        name: "_spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    payable: !0,
                    stateMutability: "payable",
                    type: "fallback"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }],
                M = function(e) {
                    var t = e.state,
                        n = t.selectedToken,
                        a = t.token,
                        c = t.web3,
                        r = t.address,
                        o = t.networkId,
                        i = e.setState,
                        u = a.address,
                        h = a.balance,
                        m = a.symbol,
                        f = a.name,
                        O = j[o],
                        y = Object(s.useState)({
                            message: "",
                            type: ""
                        }),
                        v = Object(p.a)(y, 2),
                        g = v[0],
                        w = v[1];
                    Object(s.useEffect)((function() {
                        w({
                            message: "",
                            type: ""
                        })
                    }), [n]);
                    Object(s.useEffect)(Object(d.a)(l.a.mark((function e() {
                        var t, n, s, d, h, m, f, y, v, k, N, C;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, "pending" != g.type) {
                                        e.next = 15;
                                        break
                                    }
                                    return t = new E.MultiCall(c, O.multicallAddress), n = new c.eth.Contract(S, u), s = [{
                                        tokenBalance: n.methods.balanceOf(r),
                                        symbol: n.methods.symbol(),
                                        name: n.methods.name(),
                                        decimals: n.methods.decimals(),
                                        allowance: n.methods.allowance(r, j[o].contractAddress)
                                    }], e.next = 7, t.all([s]);
                                case 7:
                                    d = e.sent, h = Object(p.a)(d, 1), m = h[0], f = m[0], y = f.tokenBalance, v = f.symbol, k = f.name, N = f.decimals, C = f.allowance, C = x()(C).div(x()(10).pow(N)).toString(), y = x()(y).div(x()(10).pow(N)).toString(), i((function(e) {
                                        return Object(b.a)(Object(b.a)({}, e), {}, {
                                            token: Object(b.a)(Object(b.a)({}, a), {}, {
                                                balance: y,
                                                allowance: C,
                                                symbol: v,
                                                name: k,
                                                decimals: N
                                            })
                                        })
                                    })), w({
                                        message: "",
                                        type: "loaded"
                                    });
                                case 15:
                                    e.next = 21;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0), console.log(e.t0), w({
                                        message: "unsupported token",
                                        type: "error"
                                    });
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 17]
                        ])
                    }))), [g.type]);
                    var k = function() {
                            var e = Object(d.a)(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            w({
                                                message: "loading token info...",
                                                type: "pending"
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        C = g.message,
                        A = g.type;
                    return !("token" != n) && Object(N.jsx)("module", {
                        children: Object(N.jsxs)("div", {
                            className: "token-loader",
                            children: [Object(N.jsx)("h2", {
                                children: "kontrakt tokenu"
                            }), Object(N.jsxs)("div", {
                                className: "flex",
                                children: [Object(N.jsx)("input", {
                                    type: "text",
                                    placeholder: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
                                    value: a.address,
                                    onChange: function(e) {
                                        i((function(t) {
                                            return Object(b.a)(Object(b.a)({}, t), {}, {
                                                token: Object(b.a)(Object(b.a)({}, a), {}, {
                                                    address: e.target.value
                                                })
                                            })
                                        }))
                                    }
                                }), Object(N.jsx)("input", {
                                    type: "submit",
                                    value: "wczytaj",
                                    onClick: k
                                })]
                            }), Object(N.jsx)("p", {
                                className: A,
                                children: C
                            }), !("loaded" != A) && Object(N.jsxs)("p", {
                                children: ["posiadasz", Object(N.jsxs)("amount", {
                                    symbol: "USDC",
                                    decimals: "6",
                                    children: [Object(N.jsxs)("span", {
                                        children: [" ", h, " "]
                                    }), Object(N.jsx)("span", {
                                        className: "sc",
                                        children: m
                                    })]
                                }), Object(N.jsxs)("span", {
                                    children: [" ( ", f, " )"]
                                }), " "]
                            })]
                        })
                    })
                },
                T = n(114),
                I = n.n(T),
                F = ["text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                H = function(e) {
                    var t = e.state,
                        n = e.setState,
                        a = t.web3,
                        s = function(e) {
                            e.preventDefault(), n((function(e) {
                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                    expandBox: !1
                                })
                            }));
                            try {
                                var t, a, s = (null === e || void 0 === e || null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.files[0]) || (null === e || void 0 === e || null === (a = e.target) || void 0 === a ? void 0 : a.files[0]);
                                if (s) {
                                    if (!F.includes(s.type)) return O.b.error("Invalid file type, please upload a valid CSV or Excel file");
                                    var r = new FileReader;
                                    r.onload = function(e) {
                                        try {
                                            var t = e.target.result,
                                                n = I.a.read(t, {
                                                    type: "binary"
                                                });
                                            console.log("here");
                                            var a = I.a.utils.sheet_to_json(n.Sheets[n.SheetNames[0]], {
                                                raw: !1,
                                                header: 1
                                            });
                                            c(a)
                                        } catch (s) {
                                            O.b.error(s.message)
                                        }
                                    }, r.readAsBinaryString(s)
                                }
                            } catch (o) {
                                O.b.error(o.message)
                            }
                        },
                        c = function(e) {
                            var t = [];
                            if (!e.length) return O.b.error("No data in the file");
                            var s, c = Object(u.a)(e);
                            try {
                                for (c.s(); !(s = c.n()).done;) {
                                    var r = s.value;
                                    a.utils.isAddress(r[0]) && parseFloat(r[1]) && t.push([r[0], r[1].replaceAll(",", "")])
                                }
                            } catch (o) {
                                c.e(o)
                            } finally {
                                c.f()
                            }
                            if (!t.length) return O.b.error("No data in the file");
                            console.log(t), n((function(e) {
                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                    addressBox: "",
                                    addressAmounts: t
                                })
                            }))
                        };
                    return Object(N.jsxs)("module", {
                        children: [Object(N.jsx)("p", {
                            className: "small-caps",
                            children: "używaj tylko dwóch kolumn. pierwsza kolumna to adres druga to kwota jaką chcesz wysłać."
                        }), t.expandBox && Object(N.jsxs)("div", {
                            onDrop: s,
                            className: "drop-box",
                            children: [Object(N.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 75 75",
                                className: "upload-icon",
                                children: [Object(N.jsx)("path", {
                                    d: "M37,47.6a1,1,0,0,1-1-1v-1a1,1,0,1,1,2,0v1A1,1,0,0,1,37,47.6Z"
                                }), Object(N.jsx)("path", {
                                    d: "M28,63H25.9a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Zm-8.2,0H17.7a1,1,0,0,1,0-2h2.1a1,1,0,0,1,0,2Zm-8.3,0h-2a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Zm22.6-.2a1,1,0,0,1-.9-.7,1,1,0,0,1,.6-1.3,5.7,5.7,0,0,0,1.3-.8,1,1,0,0,1,1.5,1.3,5.5,5.5,0,0,1-2.1,1.4ZM3.4,62.6H3a6.4,6.4,0,0,1-2-1.6,1.1,1.1,0,0,1,.2-1.4.9.9,0,0,1,1.4.2,5.8,5.8,0,0,0,1.2,1A1,1,0,0,1,4.3,62,1.1,1.1,0,0,1,3.4,62.6ZM37,55.8a1,1,0,0,1-1-1V52.7a1,1,0,0,1,2,0v2.1A1,1,0,0,1,37,55.8ZM1,55.3a1,1,0,0,1-1-1V52.2a1,1,0,0,1,2,0v2.1A1,1,0,0,1,1,55.3Zm0-8.2a1,1,0,0,1-1-1V44a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2.1A1,1,0,0,1,1,47.1Zm0-8.3a.9.9,0,0,1-1-1v-2a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2A.9.9,0,0,1,1,38.8Zm0-8.2a.9.9,0,0,1-1-1v-2a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2A.9.9,0,0,1,1,30.6Zm.1-8.2H.9a1,1,0,0,1-.8-1.2,7,7,0,0,1,1.1-2.3,1,1,0,0,1,1.4-.1,1,1,0,0,1,.1,1.4,3.5,3.5,0,0,0-.6,1.4A1,1,0,0,1,1.1,22.4ZM9.7,19h-2a1,1,0,1,1,0-2h2a1,1,0,0,1,0,2Z"
                                }), Object(N.jsx)("path", {
                                    d: "M16.9,19h-1a1,1,0,1,1,0-2h1a1,1,0,0,1,0,2Z"
                                }), Object(N.jsx)("path", {
                                    d: "M46.9,54.6h-.5a2.1,2.1,0,0,1-1.5-1.4L38.1,32.3a2.9,2.9,0,0,1,0-1.3,2.1,2.1,0,0,1,2.7-1.4h0l21.7,6.5a1.9,1.9,0,0,1,1.4,1.5,2.1,2.1,0,0,1-.6,2.1l-4,3.8L62.8,47a2.2,2.2,0,0,1,0,3l-3.7,3.7a2.2,2.2,0,0,1-3,0l-3.6-3.6L48.4,54A2,2,0,0,1,46.9,54.6ZM40.1,31.5a.1.1,0,0,0-.1.1l6.8,20.9a.1.1,0,0,0,.1.1c.1,0,.1,0,.1-.1l5.5-5.2,5,5h.2l3.7-3.7h0l-4.9-5L62,38.2h0a.1.1,0,0,0-.1-.1L40.2,31.5Z"
                                }), Object(N.jsx)("path", {
                                    d: "M53.8,11.3,43.6,1.2A3.6,3.6,0,0,0,40.8,0H21a4,4,0,0,0-4,4V42a4,4,0,0,0,4,4H42.6l-.7-2H21a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H40.2v9a4,4,0,0,0,4,4H53V33.2l2,.6V14.2A4,4,0,0,0,53.8,11.3ZM42.2,11V2.6h0L52.4,12.7l.2.3H44.2A2,2,0,0,1,42.2,11Z"
                                })]
                            }), Object(N.jsx)("h2", {
                                children: "drag csv file here or click here to upload"
                            })]
                        }), Object(N.jsxs)("div", {
                            onDrop: s,
                            className: 1 == t.expandBox ? "drop-box expand-box" : "drop-box",
                            children: [Object(N.jsx)("input", {
                                type: "file",
                                value: "",
                                onChange: s
                            }), 1 == t.expandBox ? Object(N.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                className: "upload-icon",
                                children: Object(N.jsx)("path", {
                                    d: "m14.7928932 11.5-3.1464466-3.14644661c-.1952621-.19526215-.1952621-.51184463 0-.70710678.1952622-.19526215.5118446-.19526215.7071068 0l4 3.99999999c.1952621.1952622.1952621.5118446 0 .7071068l-4 4c-.1952622.1952621-.5118446.1952621-.7071068 0-.1952621-.1952622-.1952621-.5118446 0-.7071068l3.1464466-3.1464466h-10.7928932c-.27614237 0-.5-.2238576-.5-.5s.22385763-.5.5-.5zm1.2071068-7c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h3c1.3807119 0 2.5 1.11928813 2.5 2.5v12c0 1.3807119-1.1192881 2.5-2.5 2.5h-3c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h3c.8284271 0 1.5-.6715729 1.5-1.5v-12c0-.82842712-.6715729-1.5-1.5-1.5z",
                                    transform: "matrix(0 1 -1 0 24.5 -.5)"
                                })
                            }) : Object(N.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 75 75",
                                className: "upload-icon",
                                children: [Object(N.jsx)("path", {
                                    d: "M37,47.6a1,1,0,0,1-1-1v-1a1,1,0,1,1,2,0v1A1,1,0,0,1,37,47.6Z"
                                }), Object(N.jsx)("path", {
                                    d: "M28,63H25.9a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Zm-8.2,0H17.7a1,1,0,0,1,0-2h2.1a1,1,0,0,1,0,2Zm-8.3,0h-2a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Zm22.6-.2a1,1,0,0,1-.9-.7,1,1,0,0,1,.6-1.3,5.7,5.7,0,0,0,1.3-.8,1,1,0,0,1,1.5,1.3,5.5,5.5,0,0,1-2.1,1.4ZM3.4,62.6H3a6.4,6.4,0,0,1-2-1.6,1.1,1.1,0,0,1,.2-1.4.9.9,0,0,1,1.4.2,5.8,5.8,0,0,0,1.2,1A1,1,0,0,1,4.3,62,1.1,1.1,0,0,1,3.4,62.6ZM37,55.8a1,1,0,0,1-1-1V52.7a1,1,0,0,1,2,0v2.1A1,1,0,0,1,37,55.8ZM1,55.3a1,1,0,0,1-1-1V52.2a1,1,0,0,1,2,0v2.1A1,1,0,0,1,1,55.3Zm0-8.2a1,1,0,0,1-1-1V44a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2.1A1,1,0,0,1,1,47.1Zm0-8.3a.9.9,0,0,1-1-1v-2a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2A.9.9,0,0,1,1,38.8Zm0-8.2a.9.9,0,0,1-1-1v-2a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2A.9.9,0,0,1,1,30.6Zm.1-8.2H.9a1,1,0,0,1-.8-1.2,7,7,0,0,1,1.1-2.3,1,1,0,0,1,1.4-.1,1,1,0,0,1,.1,1.4,3.5,3.5,0,0,0-.6,1.4A1,1,0,0,1,1.1,22.4ZM9.7,19h-2a1,1,0,1,1,0-2h2a1,1,0,0,1,0,2Z"
                                }), Object(N.jsx)("path", {
                                    d: "M16.9,19h-1a1,1,0,1,1,0-2h1a1,1,0,0,1,0,2Z"
                                }), Object(N.jsx)("path", {
                                    d: "M46.9,54.6h-.5a2.1,2.1,0,0,1-1.5-1.4L38.1,32.3a2.9,2.9,0,0,1,0-1.3,2.1,2.1,0,0,1,2.7-1.4h0l21.7,6.5a1.9,1.9,0,0,1,1.4,1.5,2.1,2.1,0,0,1-.6,2.1l-4,3.8L62.8,47a2.2,2.2,0,0,1,0,3l-3.7,3.7a2.2,2.2,0,0,1-3,0l-3.6-3.6L48.4,54A2,2,0,0,1,46.9,54.6ZM40.1,31.5a.1.1,0,0,0-.1.1l6.8,20.9a.1.1,0,0,0,.1.1c.1,0,.1,0,.1-.1l5.5-5.2,5,5h.2l3.7-3.7h0l-4.9-5L62,38.2h0a.1.1,0,0,0-.1-.1L40.2,31.5Z"
                                }), Object(N.jsx)("path", {
                                    d: "M53.8,11.3,43.6,1.2A3.6,3.6,0,0,0,40.8,0H21a4,4,0,0,0-4,4V42a4,4,0,0,0,4,4H42.6l-.7-2H21a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H40.2v9a4,4,0,0,0,4,4H53V33.2l2,.6V14.2A4,4,0,0,0,53.8,11.3ZM42.2,11V2.6h0L52.4,12.7l.2.3H44.2A2,2,0,0,1,42.2,11Z"
                                })]
                            }), Object(N.jsx)("h2", {
                                children: 1 == t.expandBox ? "drop here" : "Przeciągnij plik csv lub kliknij tutaj"
                            })]
                        })]
                    })
                },
                D = function(e) {
                    var t = e.state,
                        n = e.setState,
                        a = t.selectedToken,
                        s = t.token,
                        c = t.addressBox,
                        r = t.networkId,
                        o = j[r] || null;
                    return ("ether" == a || "token" == a && s.decimals > 0) && Object(N.jsxs)(N.Fragment, {
                        children: [Object(N.jsx)("module", {
                            children: Object(N.jsxs)("div", {
                                className: "amount-form",
                                children: [Object(N.jsx)("h2", {
                                    children: "konta i kwoty"
                                }), Object(N.jsxs)("p", {
                                    children: ["wpisz jeden adres i kwotę w", " ", "token" == a ? s.symbol : o.symbol, " w jeden linijce. wspiera każdy format."]
                                }), Object(N.jsx)("div", {
                                    className: "shadow",
                                    children: Object(N.jsx)("textarea", {
                                        useRef: "addresses",
                                        spellCheck: "false",
                                        placeholder: "0xC3821F0b56FA4F4794d5d760f94B812DE261361B   1.6180 0x271bffabd0f79b8bd4d7a1c245b7ec5b576ea98a,6.0221515 0x141ca95b6177615fb1417cf70e930e102bf8f584=3.141592",
                                        onChange: function(e) {
                                            n((function(t) {
                                                return Object(b.a)(Object(b.a)({}, t), {}, {
                                                    addressBox: e.target.value
                                                })
                                            }))
                                        },
                                        name: "addressForm",
                                        value: c
                                    })
                                })]
                            })
                        }), Object(N.jsx)(H, {
                            state: t,
                            setState: n
                        })]
                    })
                },
                Z = function(e) {
                    var t = e.token,
                        n = e.networkId,
                        a = e.total,
                        c = e.state,
                        r = e.setState,
                        o = Object(s.useState)({
                            hash: "",
                            status: "",
                            type: ""
                        }),
                        i = Object(p.a)(o, 2),
                        u = i[0],
                        h = i[1];
                    var m = function() {
                        var e = Object(d.a)(l.a.mark((function e(a) {
                            var s, o;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        s = new c.web3.eth.Contract(S, t.address), o = s.methods.approve(j[n].contractAddress, a).send({
                                            from: c.address
                                        }), h((function(e) {
                                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                                status: "sign transaction on metamask",
                                                hash: "",
                                                type: "pending"
                                            })
                                        })), o.once("error", (function(e) {
                                            h((function(e) {
                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                    status: "Transakcja odrzucona",
                                                    type: "error"
                                                })
                                            }))
                                        })).once("transactionHash", (function(e) {
                                            h((function(t) {
                                                return Object(b.a)(Object(b.a)({}, t), {}, {
                                                    status: "transaction pending",
                                                    type: "pending",
                                                    hash: e
                                                })
                                            }))
                                        })).then(function() {
                                            var e = Object(d.a)(l.a.mark((function e(a) {
                                                var o;
                                                return l.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!a.status || 1 != a.status) {
                                                                e.next = 7;
                                                                break
                                                            }
                                                            return e.next = 3, s.methods.allowance(c.address, j[n].contractAddress).call();
                                                        case 3:
                                                            o = e.sent, o = x()(o).div(x()(10).pow(t.decimals)).toString(), r((function(e) {
                                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                    token: Object(b.a)(Object(b.a)({}, t), {}, {
                                                                        allowance: o
                                                                    })
                                                                })
                                                            })), h((function(e) {
                                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                    status: "transaction success",
                                                                    type: "success"
                                                                })
                                                            }));
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(N.jsx)(N.Fragment, {
                        children: "token" == c.selectedToken && x()(t.allowance).gte(x()(a)) ? Object(N.jsxs)(N.Fragment, {
                            children: [Object(N.jsx)("h2", {
                                children: "allowance"
                            }), Object(N.jsx)("p", {
                                class: "small-caps",
                                children: "the Smart Contract has permission to send these tokens from your wallet. You can revoke it anytime by pressing the revoke button."
                            }), Object(N.jsxs)("div", {
                                className: "transaction",
                                children: [Object(N.jsx)("input", {
                                    type: "submit",
                                    value: "revoke",
                                    className: "secondary",
                                    onClick: function() {
                                        return m("0")
                                    }
                                }), Object(N.jsxs)("div", {
                                    className: "status",
                                    children: [Object(N.jsx)("div", {
                                        style: {
                                            display: "none"
                                        }
                                    }), Object(N.jsx)("div", {
                                        className: u.type,
                                        children: u.status
                                    }), Object(N.jsx)("a", {
                                        className: "hash",
                                        target: "_blank",
                                        href: j[n].explorer.url + "/tx/" + u.hash,
                                        children: u.hash
                                    })]
                                })]
                            })]
                        }) : "token" == c.selectedToken ? Object(N.jsxs)(N.Fragment, {
                            children: [Object(N.jsx)("h2", {
                                children: "allowance"
                            }), Object(N.jsx)("p", {
                                children: "allow smart contract to transfer tokens on your behalf."
                            }), Object(N.jsxs)("div", {
                                className: "transaction",
                                children: [Object(N.jsx)("input", {
                                    type: "submit",
                                    value: "approve",
                                    onClick: function() {
                                        return m("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
                                    }
                                }), Object(N.jsxs)("div", {
                                    className: "status",
                                    children: [Object(N.jsx)("div", {
                                        style: {
                                            display: "none"
                                        }
                                    }), Object(N.jsx)("div", {
                                        className: u.type,
                                        children: u.status
                                    }), Object(N.jsx)("a", {
                                        className: "hash",
                                        target: "_blank",
                                        href: j[n].explorer.url + "/tx/" + u.hash,
                                        children: u.hash
                                    })]
                                })]
                            })]
                        }) : void 0
                    })
                },
                _ = [{
                    inputs: [{
                        internalType: "address",
                        name: "_feeAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_fee",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "TransferFailed",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_fee",
                        type: "uint256"
                    }],
                    name: "changeFee",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_feeAddress",
                        type: "address"
                    }],
                    name: "changeFeeAddress",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }],
                    name: "changeOwner",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "fee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "feeAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "recipients",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]"
                    }, {
                        internalType: "bool",
                        name: "revertOnfail",
                        type: "bool"
                    }],
                    name: "scatterEther",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IERC20",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "address[]",
                        name: "recipients",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]"
                    }, {
                        internalType: "bool",
                        name: "revertOnfail",
                        type: "bool"
                    }],
                    name: "scatterTokenSimple",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }],
                L = function(e) {
                    var t = e.state,
                        n = e.setState,
                        a = t.addressAmounts,
                        c = t.mainBalance,
                        r = t.token,
                        o = t.selectedToken,
                        i = t.networkId,
                        u = t.fee,
                        h = "ether" == o ? c : r.balance,
                        m = j[i] || null;
                    console.log("AddressAmounts: ".concat(JSON.stringify(a)));
                    var f = a.reduce((function(e, t) {
                        return e.plus(x()(t[1].replaceAll(",", "")))
                    }), x()(0));
                    "ether" == o && (f = f.plus(u)), f = f.toString();
                    var y = Object(s.useState)({
                            hash: "",
                            status: "",
                            type: ""
                        }),
                        v = Object(p.a)(y, 2),
                        g = v[0],
                        w = v[1],
                        k = Object(s.useState)(null),
                        C = Object(p.a)(k, 2),
                        A = C[0],
                        B = C[1];
                    Object(s.useEffect)((function() {
                        w((function(e) {
                            return {
                                hash: "",
                                status: "",
                                type: ""
                            }
                        }))
                    }), [t.addressAmounts]);
                    var E = function(e) {
                            switch (e.target.value) {
                                case "yes":
                                    B(!0);
                                    break;
                                case "no":
                                    B(!1)
                            }
                        },
                        S = x()(h).minus(x()(f)).toString(),
                        M = "token" == o ? r.symbol : m.symbol,
                        T = m.symbol;
                    return !!a.length && null != o && Object(N.jsxs)(N.Fragment, {
                        children: [Object(N.jsx)("module", {
                            children: Object(N.jsxs)("div", {
                                className: "confirm-amounts",
                                children: [Object(N.jsx)("h2", {
                                    children: "Potwierdz"
                                }), Object(N.jsxs)("div", {
                                    className: "addresses",
                                    children: [Object(N.jsxs)("ul", {
                                        children: [Object(N.jsx)("li", {
                                            className: "accent",
                                            children: Object(N.jsxs)("div", {
                                                className: "flex",
                                                children: [Object(N.jsx)("div", {
                                                    children: "adresy"
                                                }), Object(N.jsx)("div", {
                                                    className: "expand"
                                                }), Object(N.jsx)("div", {
                                                    children: "kwota"
                                                })]
                                            })
                                        }), a.map((function(e, t) {
                                            return Object(N.jsx)("li", {
                                                children: Object(N.jsxs)("div", {
                                                    className: "flex",
                                                    children: [Object(N.jsx)("div", {
                                                        children: e[0]
                                                    }), Object(N.jsx)("div", {
                                                        className: "expand bar"
                                                    }), Object(N.jsxs)("amount", {
                                                        symbol: "MATIC",
                                                        decimals: "18",
                                                        children: [Object(N.jsxs)("span", {
                                                            children: [e[1], " "]
                                                        }), Object(N.jsx)("span", {
                                                            className: "sc",
                                                            children: M
                                                        })]
                                                    })]
                                                })
                                            }, t)
                                        })), u > 0 && Object(N.jsx)("li", {
                                            className: "fees",
                                            children: Object(N.jsxs)("div", {
                                                className: "flex",
                                                children: [Object(N.jsx)("div", {
                                                    children: "scatter fees"
                                                }), Object(N.jsx)("div", {
                                                    className: "expand bar"
                                                }), Object(N.jsxs)("amount", {
                                                    symbol: "MATIC",
                                                    decimals: "18",
                                                    children: [Object(N.jsx)("span", {
                                                        children: u
                                                    }), Object(N.jsx)("span", {
                                                        className: "sc",
                                                        children: " " + T
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), Object(N.jsxs)("ul", {
                                        children: [Object(N.jsx)("li", {
                                            className: "accent",
                                            children: Object(N.jsxs)("div", {
                                                className: "flex",
                                                children: [Object(N.jsx)("div", {
                                                    children: "Suma"
                                                }), Object(N.jsx)("div", {
                                                    className: "expand"
                                                }), Object(N.jsxs)("amount", {
                                                    children: [Object(N.jsxs)("span", {
                                                        children: [f, " "]
                                                    }), Object(N.jsx)("span", {
                                                        className: "sc",
                                                        children: M
                                                    }), "ether" != o && u > 0 && Object(N.jsxs)(N.Fragment, {
                                                        children: [Object(N.jsxs)("span", {
                                                            children: [" + ", u, " "]
                                                        }), Object(N.jsx)("span", {
                                                            className: "sc",
                                                            children: T
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), Object(N.jsx)("li", {
                                            className: "accent",
                                            children: Object(N.jsxs)("div", {
                                                className: "flex",
                                                children: [Object(N.jsx)("div", {
                                                    children: "Ile posiadasz"
                                                }), Object(N.jsx)("div", {
                                                    className: "expand"
                                                }), Object(N.jsxs)("amount", {
                                                    children: [Object(N.jsxs)("span", {
                                                        children: [h, " "]
                                                    }), Object(N.jsx)("span", {
                                                        className: "sc",
                                                        children: M
                                                    })]
                                                })]
                                            })
                                        }), Object(N.jsx)("li", {
                                            className: "accent",
                                            children: Object(N.jsxs)("div", {
                                                className: S < 0 ? "flex negative" : "flex",
                                                children: [Object(N.jsx)("div", {
                                                    children: "Pozostanie po wysłaniu"
                                                }), Object(N.jsx)("div", {
                                                    className: "expand"
                                                }), Object(N.jsxs)("amount", {
                                                    children: [Object(N.jsxs)("span", {
                                                        children: [S, " "]
                                                    }), Object(N.jsx)("span", {
                                                        className: "sc",
                                                        children: M
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), Object(N.jsx)("module", {
                            className: "revertonfail",
                            children: Object(N.jsxs)("div", {
                                className: "token-selector",
                                onChange: E,
                                children: [Object(N.jsx)("h2", {
                                    children: "w razie jak pojawią się jakieś błędy"
                                }), Object(N.jsx)("p", {
                                    children: "Czy chcesz przerwać całą transakcję, jeżeli pojawi się jakiś błąd?"
                                }), Object(N.jsxs)("div", {
                                    className: "chooser",
                                    children: [Object(N.jsx)("input", {
                                        type: "radio",
                                        id: "yes",
                                        value: "yes",
                                        name: "revertOnfail",
                                        checked: !0 === A,
                                        onClick: E,
                                        readOnly: !0
                                    }), Object(N.jsx)("label", {
                                        htmlFor: "yes",
                                        children: "Tak"
                                    }), " ", Object(N.jsx)("label", {
                                        children: "lub"
                                    }), Object(N.jsx)("input", {
                                        type: "radio",
                                        id: "no",
                                        value: "no",
                                        name: "revertOnfail",
                                        checked: !1 === A,
                                        onClick: E,
                                        readOnly: !0
                                    }), Object(N.jsx)("label", {
                                        htmlFor: "no",
                                        children: "Nie"
                                    })]
                                }), Object(N.jsx)("p", {
                                    className: "label",
                                    children: 1 == A && "Gdy pojawi się jakiś błąd cała transakcja zostanie anulowana!"
                                }), Object(N.jsx)("p", {
                                    className: "label",
                                    children: 0 == A && "Wszystkie poprawne transakcje przejdą."
                                })]
                            })
                        }), Object(N.jsxs)("div", {
                            children: [Object(N.jsx)(Z, {
                                total: f,
                                token: r,
                                networkId: i,
                                state: t,
                                setState: n
                            }), function() {
                                var e = x()(r.allowance).gte(x()(f)),
                                    n = S >= 0,
                                    a = c - u >= 0,
                                    s = e && n && a && null != A;
                                return "token" == t.selectedToken ? Object(N.jsx)(N.Fragment, {
                                    children: Object(N.jsxs)("div", {
                                        className: "transaction",
                                        children: [Object(N.jsx)("input", {
                                            type: "submit",
                                            value: "wyślij",
                                            disabled: !s,
                                            onClick: I
                                        }), Object(N.jsxs)("div", {
                                            className: "status",
                                            children: [Object(N.jsx)("div", {
                                                style: {
                                                    display: "none"
                                                }
                                            }), Object(N.jsx)("div", {
                                                className: s ? g.type : "error",
                                                children: e ? a ? null == A ? "select one of the above" : n ? g.status : "nie wystarczające saldo" : "not enough ".concat(m.symbol.toLowerCase(), " for fees") : "needs allowance"
                                            }), Object(N.jsx)("a", {
                                                className: "hash",
                                                target: "_blank",
                                                href: m.explorer.url + "/tx/" + g.hash,
                                                children: e ? g.hash : ""
                                            })]
                                        })]
                                    })
                                }) : (console.log(A), Object(N.jsxs)(N.Fragment, {
                                    children: [" ", Object(N.jsxs)("div", {
                                        className: "transaction",
                                        children: [Object(N.jsx)("input", {
                                            type: "submit",
                                            value: "wyślij",
                                            disabled: !n || !(null != A),
                                            onClick: I
                                        }), Object(N.jsxs)("div", {
                                            className: "status",
                                            children: [Object(N.jsx)("div", {
                                                style: {
                                                    display: "none"
                                                }
                                            }), Object(N.jsx)("div", {
                                                className: n ? g.type : "error",
                                                children: n ? g.status : "not enough balance"
                                            }), Object(N.jsx)("a", {
                                                className: "hash",
                                                target: "_blank",
                                                href: m.explorer.url + "/tx/" + g.hash,
                                                children: g.hash
                                            })]
                                        })]
                                    })]
                                }))
                            }()]
                        })]
                    });

                    function I() {
                        return F.apply(this, arguments)
                    }

                    function F() {
                        return (F = Object(d.a)(l.a.mark((function e() {
                            var s, c, i, p, h, j, y, v;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, "token" != o) {
                                            e.next = 13;
                                            break
                                        }
                                        return s = a.map((function(e) {
                                            return e[0]
                                        })), c = a.map((function(e) {
                                            return x()(e[1]).times(x()(10).pow(r.decimals)).toFixed()
                                        })), console.log("Sending ".concat(c, " to ").concat(s)), i = new t.web3.eth.Contract(_, m.contractAddress), e.next = 8, i.methods.scatterEther(s, c, !1).estimateGas().catch((function(e) {
                                            if (e.message.includes("gas required exceeds allowance")) throw new Error('Amount of Gas required to send this transaction exceeds the "Block Gas limit" on the '.concat(m.networkName, " chain, try again with a lesser number of addresses."))
                                        }));
                                    case 8:
                                        p = i.methods.scatterTokenSimple(r.address, s, c, A).send({
                                            from: t.address,
                                            value: t.web3.utils.toWei(u, "ether")
                                        }), w((function(e) {
                                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                                status: "podpisz transakcję w metamask",
                                                hash: "",
                                                type: "pending"
                                            })
                                        })), p.once("error", (function(e) {
                                            w((function(e) {
                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                    status: "Transakcja odrzucona",
                                                    type: "error"
                                                })
                                            })), O.b.error(e.message)
                                        })).once("transactionHash", (function(e) {
                                            w((function(t) {
                                                return Object(b.a)(Object(b.a)({}, t), {}, {
                                                    status: "transaction pending",
                                                    type: "pending",
                                                    hash: e
                                                })
                                            })), O.b.warning("Transaction broadcasted to the blockchain")
                                        })).then(function() {
                                            var e = Object(d.a)(l.a.mark((function e(t) {
                                                return l.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            t.status && 1 == t.status && (w((function(e) {
                                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                    status: "transaction success",
                                                                    type: "success"
                                                                })
                                                            })), O.b.success("Transaction Successful"));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), e.next = 14;
                                        break;
                                    case 13:
                                        "ether" == o && (f = x()(f).times(x()(10).pow(18)).toString(), h = a.map((function(e) {
                                            return e[0]
                                        })), j = a.map((function(e) {
                                            return x()(e[1]).times(x()(10).pow(18)).toString()
                                        })), y = new t.web3.eth.Contract(_, m.contractAddress), v = y.methods.scatterEther(h, j, A).send({
                                            from: t.address,
                                            value: f
                                        }), w((function(e) {
                                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                                status: "podpisz transakcję w metamask",
                                                hash: "",
                                                type: "pending"
                                            })
                                        })), v.once("error", (function(e) {
                                            w((function(e) {
                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                    status: "Transakcja odrzucona",
                                                    type: "error"
                                                })
                                            })), O.b.error(e.message)
                                        })).once("transactionHash", (function(e) {
                                            w((function(t) {
                                                return Object(b.a)(Object(b.a)({}, t), {}, {
                                                    status: "transaction pending",
                                                    type: "pending",
                                                    hash: e
                                                })
                                            })), O.b.warning("Transakcja wysłana do blockchain")
                                        })).then(function() {
                                            var e = Object(d.a)(l.a.mark((function e(a) {
                                                var s;
                                                return l.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!a.status || 1 != a.status) {
                                                                e.next = 7;
                                                                break
                                                            }
                                                            return e.next = 3, t.web3.eth.getBalance(t.address);
                                                        case 3:
                                                            s = e.sent, n((function(e) {
                                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                    token: Object(b.a)(Object(b.a)({}, r), {}, {
                                                                        mainBalance: s
                                                                    })
                                                                })
                                                            })), w((function(e) {
                                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                    status: "transaction success",
                                                                    type: "success"
                                                                })
                                                            })), O.b.success("Transakcja ukończona");
                                                        case 7:
                                                            a.status && 0 == a.status && w((function(e) {
                                                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                    status: "transaction error",
                                                                    type: "error"
                                                                })
                                                            }));
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 14:
                                        e.next = 19;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(0), O.b.error(e.t0.message);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 16]
                            ])
                        })))).apply(this, arguments)
                    }
                },
                U = function() {
                    return Object(N.jsx)("div", {
                        className: "footer",
                        children: Object(N.jsxs)("p", {
                            children: ["Made with \u2764\ufe0f by", " ", Object(N.jsx)("a", {
                                target: "_blank",
                                href: "#Tadebu",
                                children: "Tadebu"
                            })]
                        })
                    })
                };
            var V = function() {
                    var e = Object(s.useState)({
                            isInjected: !1,
                            connected: !1,
                            address: 0,
                            web3: null,
                            networkId: 0,
                            mainBalance: 0,
                            tokenBalance: 0,
                            fee: 0,
                            addressBox: "",
                            tokenBox: 0,
                            allowance: 0,
                            hash: null,
                            transactionStatus: null,
                            addressAmounts: [],
                            selectedToken: null,
                            token: {
                                address: "",
                                balance: 0,
                                symbol: "",
                                name: "",
                                decimals: 0,
                                allowance: 0
                            },
                            expandBox: !1
                        }),
                        t = Object(p.a)(e, 2),
                        n = t[0],
                        a = t[1];
                    Object(s.useLayoutEffect)((function() {
                        window.ethereum && (a((function(e) {
                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                isInjected: !0
                            })
                        })), o(window.ethereum))
                    }), []), Object(s.useEffect)((function() {
                        document.documentElement.addEventListener("dragenter", c), document.documentElement.addEventListener("dragleave", r)
                    }), []);
                    var c = function(e) {
                            e.preventDefault(), console.log("In Enter", e), 0 == n.expandBox && a((function(e) {
                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                    expandBox: !0
                                })
                            }))
                        },
                        r = function(e) {
                            e.preventDefault(), console.log(e), 0 == e.screenX && 0 == e.screenY && a((function(e) {
                                return Object(b.a)(Object(b.a)({}, e), {}, {
                                    expandBox: !1
                                })
                            }))
                        };

                    function o(e) {
                        return i.apply(this, arguments)
                    }

                    function i() {
                        return (i = Object(d.a)(l.a.mark((function e(t) {
                            var n, s, c, r, o, i, u, p, h;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, n = function() {
                                            t.on("accountsChanged", function() {
                                                var e = Object(d.a)(l.a.mark((function e(t) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                console.log("in accounts change"), t[0] ? (a((function(e) {
                                                                    return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                        connected: !0,
                                                                        address: t[0]
                                                                    })
                                                                })), window.location.reload()) : a((function(e) {
                                                                    return Object(b.a)(Object(b.a)({}, e), {}, {
                                                                        connected: !1,
                                                                        address: 0
                                                                    })
                                                                }));
                                                            case 2:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), t.on("chainChanged", function() {
                                                var e = Object(d.a)(l.a.mark((function e(t) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                console.log("in chain change"), window.location.reload();
                                                            case 2:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }())
                                        }, (s = new m.a(t)).eth.extend({
                                            methods: [{
                                                name: "chainId",
                                                call: "eth_chainId",
                                                outputFormatter: s.utils.hexToNumber
                                            }]
                                        }), n(), e.next = 7, s.eth.requestAccounts();
                                    case 7:
                                        return c = e.sent, r = c[0], e.next = 11, s.eth.getChainId();
                                    case 11:
                                        return o = e.sent, e.next = 14, s.eth.getBalance(r);
                                    case 14:
                                        if (i = e.sent, i = x()(i).div(x()(10).pow(18)).toString(), 0 != (o = j[o] ? o : 0)) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.abrupt("return", a((function(e) {
                                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                                connected: !0,
                                                networkId: o,
                                                address: r,
                                                web3: s,
                                                mainBalance: i
                                            })
                                        })));
                                    case 19:
                                        return u = j[o], p = new s.eth.Contract(_, u.contractAddress), e.next = 23, p.methods.fee().call();
                                    case 23:
                                        h = e.sent, h = x()(h).div(x()(10).pow(18)).toString(), a((function(e) {
                                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                                connected: !0,
                                                networkId: o,
                                                address: r,
                                                web3: s,
                                                mainBalance: i,
                                                fee: h
                                            })
                                        })), e.next = 32;
                                        break;
                                    case 28:
                                        e.prev = 28, e.t0 = e.catch(0), O.b.error(e.t0.message), console.log("error while connecting");
                                    case 32:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 28]
                            ])
                        })))).apply(this, arguments)
                    }
                    Object(s.useEffect)((function() {
                        var e = n.addressBox.split("\n"),
                            t = [];
                        console.log("in first effect");
                        var s, c = Object(u.a)(e);
                        try {
                            for (c.s(); !(s = c.n()).done;) {
                                var r = s.value.split(/[\s,=]/);
                                2 === r.length && n.web3.utils.isAddress(r[0]) && parseFloat(r[1]) && t.push([r[0], r[1]])
                            }
                        } catch (o) {
                            c.e(o)
                        } finally {
                            c.f()
                        }
                        a((function(e) {
                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                addressAmounts: t
                            })
                        }))
                    }), [n.addressBox]), Object(s.useEffect)((function() {
                        a((function(e) {
                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                addressAmounts: [],
                                addressBox: "",
                                token: {
                                    address: "",
                                    balance: 0,
                                    symbol: "",
                                    name: "",
                                    decimals: 0,
                                    allowance: 0
                                }
                            })
                        }))
                    }), [n.selectedToken]), Object(s.useEffect)((function() {
                        a((function(e) {
                            return Object(b.a)(Object(b.a)({}, e), {}, {
                                addressBox: ""
                            })
                        }))
                    }), [n.selectedToken]);
                    var h = n.connected,
                        f = n.networkId;
                    return Object(N.jsxs)("div", {
                        className: "main",
                        children: [Object(N.jsxs)("div", {
                            className: "container",
                            children: [Object(N.jsx)(O.a, {
                                pauseOnFocusLoss: !1
                            }), Object(N.jsx)(C, {
                                state: n
                            }), Object(N.jsx)(A, {
                                state: n,
                                setState: a,
                                connectWallet: o
                            }), !(1 != h || !f) && Object(N.jsxs)(N.Fragment, {
                                children: [Object(N.jsx)(B, {
                                    state: n,
                                    setState: a
                                }), Object(N.jsx)(M, {
                                    state: n,
                                    setState: a
                                }), Object(N.jsx)(D, {
                                    state: n,
                                    setState: a
                                }), Object(N.jsx)(L, {
                                    state: n,
                                    setState: a
                                })]
                            })]
                        }), Object(N.jsx)(U, {
                            className: "footer"
                        })]
                    })
                },
                R = (n(516), function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 521)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            s = t.getFCP,
                            c = t.getLCP,
                            r = t.getTTFB;
                        n(e), a(e), s(e), c(e), r(e)
                    }))
                });
            o.a.render(Object(N.jsx)(c.a.StrictMode, {
                children: Object(N.jsx)(V, {})
            }), document.getElementById("root")), R()
        }
    },
    [
        [517, 1, 2]
    ]
]);
