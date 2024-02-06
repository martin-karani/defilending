import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>Layout</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
