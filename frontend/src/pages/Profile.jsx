function Profile() {
  const token = localStorage.getItem('token');
  return (
    <div className="container mt-5">
      <h3>User Token</h3>
      <pre className="bg-light p-3">{token || "Not logged in."}</pre>
    </div>
  );
}

export default Profile;
