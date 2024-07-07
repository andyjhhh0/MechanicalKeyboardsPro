const LogIn = () => {
  return (
    <div className="log-in container mt-5">
      <h2>Log In</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address: </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password: </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-danger">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
