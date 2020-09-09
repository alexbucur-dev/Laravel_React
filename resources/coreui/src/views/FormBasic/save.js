class FormNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value,
        });
    };
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    };

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };





    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nume utilizator</label>
                    <CInput
                        type = "text"
                        name = "nume"
                        value = {this.state.username}
                        onChange = {this.handleUsernameChange}
                        placeholder = "Introdu numele de utilizator"
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <CInput
                        type = "text"
                        name = "email"
                        value = {this.state.email}
                        onChange = {this.handleEmailChange}
                        placeholder = "Introdu numele de utilizator"
                        required
                    />
                </div>
                <CButton
                    onClick={this.handleSubmit}
                    color="primary"

                >Submit</CButton>

            </form>
        )
    }
}