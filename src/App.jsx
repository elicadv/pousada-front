import axios from "axios";
import React from "react";
import { Body } from "./components/Body/Body";
import Header from "./components/Header/Header";

//const baseURL = "https://smiling-bear-scarf.cyclic.app/pousada";
const baseURL = "https://smiling-bear-scarf.cyclic.app/pousada/nome/Maria";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      //console.log(response.data)
      //setPost(response.data.Pousada); Por hora usar esse!!!
    });
  }, []);

  return (
    <div>
      <Header/>
      <Body/>
     {/*<p>Id:{post?.id}</p>
     <p>Nome:{post?.nome}</p>
     <p>E-mail:{post?.email}</p>
     <p>Telefone:{post?.telefone}</p>
     <p>Senha:{post?.senha}</p>*/}
    
    </div>)
}

