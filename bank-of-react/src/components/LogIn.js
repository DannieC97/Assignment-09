
function LogIn(props) {
    props.test()

    function handleSubmit(e) {
        e.preventDefualt()

    }
    function handleChange(e) {
        const inputField = e.target.name
        const inputValue = e.target.value
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button>Log In</button>
            </form>
        </div>
    )

}
export default LogIn;