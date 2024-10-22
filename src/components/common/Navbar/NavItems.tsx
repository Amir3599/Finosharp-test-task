import { FaBitcoin } from "react-icons/fa";
import { RiBarChartFill, RiCoinsFill } from "react-icons/ri";
import { FaArrowTrendUp, FaPiggyBank, FaBookOpen } from "react-icons/fa6";
import { CgMoreR } from "react-icons/cg";


export const NAVBAR_ITEMS = [
    {
        name: "Buy Crypto",
        link: "#",
        icon: <FaBitcoin />
    },
    {
        name: "Markets",
        link: "#",
        icon: <RiBarChartFill />
    },
    {
        name: "Trade",
        link: "#",
        popoverContent: <div className="p-4">Trade Popover Content</div>,
        subItems: ["Basic", "Spot", "Margin", "P2P", "Convert & Block Trade", "Advanced", "Trading Bots", "Copy Trading", "APIs"],
        icon: <RiCoinsFill />
    },
    {
        name: "Futures",
        link: "#",
        popoverContent: <div className="p-4">Futures Popover Content</div>,
        subItems: ["USDⓈ-M Futures", "COIN-M Futures", "Options"],
        icon: <FaArrowTrendUp />
    },
    {
        name: "Earn",
        link: "#",
        popoverContent: <div className="p-4">Earn Popover Content</div>,
        icon: <FaPiggyBank />
    },
    {
        name: "Square",
        link: "#",
        popoverContent: <div className="p-4">Square Popover Content</div>,
        subItems: ["Square", "Academy (Learn & Earn)", "Blog", "Research"],
        icon: <FaBookOpen />
    },
    {
        name: "More",
        link: "#",
        popoverContent: <div className="p-4">More Popover Content</div>,
        icon: <CgMoreR />
    },
]

export const NAVBAR_ITEMS_LITTLE = [
    {
        name: "Buy Crypto",
        link: "#",
        icon: <FaBitcoin />
    },
    {
        name: "Markets",
        link: "#",
        icon: <RiBarChartFill />
    },
    {
        name: "Earn",
        link: "#",
        popoverContent: <div className="p-4">Earn Popover Content</div>,
        icon: <FaPiggyBank />
    },
]