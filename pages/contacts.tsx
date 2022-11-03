import Layout from "../components/app-layout";

import { SiGmail } from "react-icons/si";

// import array of team members
import team from "../constants/team";

const Contacts = () => {
  return (
    <Layout>
      <div className="text-center">
        <a href="mailto:belarusian.book.crossing@gmail.com" type="mailto">
          <button>
            <SiGmail className="w-20 h-auto"/>
          </button>
        </a>
        {team.map((person)=> {
            return (
            <a 
            href={person.mail}
            key={person.id} 
            className="block text-xl mt-4 text-sky-900 hover:text-sky-400"
            >
                {person.name} - {person.role}
            </a>
            )
        })}
      </div>
    </Layout>
  );
};

export default Contacts;
