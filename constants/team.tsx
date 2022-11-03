interface TeamMember {
    id: number;
    name: string;
    role: string;
    mail: string;
  }


const teamArray: TeamMember[] = [
    {
        id: 1,
        name: "Ганна",
        role: "ідэя, арганізацыя",
        mail: "1test@gmail.com",
    },
    {
        id: 2,
        name: "Аляксандр",
        role: "frontend developer",
        mail: "2test@gmail.com",
    },
    {
        id: 3,
        name: "Аляксей",
        role: "backend developer",
        mail: "3test@gmail.com",
    },
    {
        id: 4,
        name: "Аляксандра",
        role: "універсальны салдат",
        mail: "4test@gmail.com",
    },
    {
        id: 5,
        name: "Кірыл",
        role: "распрацоўка бота",
        mail: "5test@gmail.com",
    },
    {
        id: 6,
        name: "Піліп",
        role: "распрацоўка бота",
        mail: "6test@gmail.com",
    }
]

export default teamArray;