// src/laws.js
export const lawSections = [
    {
        title: "學生會內法規彙編", 
        items: [
            { name: "學生會組織章程", path: "/act/act01" },
            { name: "學生會學生代表法", path: "/act/act02" },
            { name: "行政中心組織及運作法", path: "/act/act03" },
            { name: "學生議會組織及運作法", path: "/act/act04" },
            { name: "學生會選舉及罷免法", path: "/act/act05" },
            { name: "學生會經費法", path: "/act/act06" },
            { name: "自治法規標準法", path: "/act/act07" },
            { name: "學生政黨法", path: "/act/act08" },
        ]
    },
    {
        title: "校務章則節選（非屬學生會自治法規，僅供參考）",
        items: [
            { name: "本校會議旁聽要點", path: "/direction/direction01" },
            // 未來若有其他校規，直接在這裡加一行即可，編號會自動產生
        ]
    },
    {
        title: "已廢止法規",
        items: [
            { name: "學生會組織辦法", path: "/act/old-act01" },
            { name: "學生議員選舉及罷免辦法", path: "/act/old-act02" },
        ]
    }
];