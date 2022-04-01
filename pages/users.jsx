import Link from "next/link";
import MainContainer from "../Components/MainContainer";

const Users = ({users}) => {
     return (
          <MainContainer keywords={'Users page'}>
               <h1>Список пользователей</h1>
               <div>
                    <ul>
                         {users.map(user =>
                              <li key={user.id}>
                                   <Link href={`/Users/${user.id}`}>
                                        <a>{user.name}</a>
                                   </Link>
                              </li>
                         )}
                    </ul>
               </div>
          </MainContainer>
     );
};

export default Users;

export async function getStaticProps(context) {
     const response = await fetch('https://jsonplaceholder.typicode.com/users') 
     const users = await response.json()
     return {
       props: {users}, // will be passed to the page component as props
     }
}