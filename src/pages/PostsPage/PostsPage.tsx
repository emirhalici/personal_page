import Card from '../../components/Card/Card';
import Divider from '../../components/Divider/Divider';
import Post from '../../components/Post/Post';
import './PostsPage.css';

export default function PostsPage() {
  return (
    <div>
      <Post
        title='Sunt deserunt nostrud duis tempor id sint deserunt cupidatat'
        subtitle='Cillum proident cupidatat nulla fugiat anim fugiat ad tempor mollit.'
        detail={{ date: '15 April 2023', message: '2 min read' }}
      >
        <p>
          Commodo dolore pariatur do adipisicing. Ut laborum ut exercitation eu veniam ad proident
          nisi consectetur excepteur veniam proident deserunt. Reprehenderit incididunt dolor Lorem
          elit. Qui ex excepteur cupidatat culpa in tempor deserunt eiusmod voluptate adipisicing
          irure reprehenderit qui commodo. In dolor quis elit exercitation magna ut. Commodo id sint
          Lorem nostrud est ipsum non anim ad irure laboris occaecat. Nulla consectetur in proident
          amet sint irure dolore aliquip.
        </p>
        <p>
          Aliquip tempor Lorem duis velit ut excepteur laboris deserunt cupidatat nulla mollit enim.
          Aute esse tempor sunt deserunt magna sunt nostrud ex. Do magna ad dolor elit ullamco
          pariatur nostrud pariatur consequat in magna excepteur dolor.
        </p>
        <Card>
          <p>Cupidatat sunt in reprehenderit ea irure.</p>
        </Card>
        <p>Anim id eiusmod eu amet adipisicing aliquip ullamco.</p>
      </Post>
      <Divider />
      <Post
        title='Sunt deserunt nostrud duis tempor id sint deserunt cupidatat veniam exercitation culpa adipisicing nulla.'
        subtitle='Cillum proident cupidatat nulla fugiat anim fugiat ad tempor mollit.'
        detail={{ date: '15 April 2023', message: '2 min read' }}
      >
        <p>
          Commodo dolore pariatur do adipisicing. Ut laborum ut exercitation eu veniam ad proident
          nisi consectetur excepteur veniam proident deserunt. Reprehenderit incididunt dolor Lorem
          elit. Qui ex excepteur cupidatat culpa in tempor deserunt eiusmod voluptate adipisicing
          irure reprehenderit qui commodo. In dolor quis elit exercitation magna ut. Commodo id sint
          Lorem nostrud est ipsum non anim ad irure laboris occaecat. Nulla consectetur in proident
          amet sint irure dolore aliquip.
        </p>
        <p>
          Aliquip tempor Lorem duis velit ut excepteur laboris deserunt cupidatat nulla mollit enim.
          Aute esse tempor sunt deserunt magna sunt nostrud ex. Do magna ad dolor elit ullamco
          pariatur nostrud pariatur consequat in magna excepteur dolor.
        </p>
        <Card>
          <p>Cupidatat sunt in reprehenderit ea irure.</p>
        </Card>
        <p>Anim id eiusmod eu amet adipisicing aliquip ullamco.</p>
      </Post>
      <div style={{ height: 200 }}></div>
    </div>
  );
}
