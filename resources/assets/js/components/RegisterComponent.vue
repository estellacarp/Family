<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <h1>Hello Register Component</h1>    
                    <div class="form-group">
                        <label  class="col-md-4 control-label">First Name</label>
                        <div class="col-md-6">
                            <input type="text" v-model="user.first_name" class="form-control" name="email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-md-4 control-label">Last Name</label>
                        <div class="col-md-6">
                            <input type="text" v-model="user.last_name" class="form-control" name="email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-md-4 control-label">E-Mail Address</label>
                        <div class="col-md-6">
                            <input type="email" v-model="user.email" class="form-control" name="email" required>
                        </div>
                    </div>
                    <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" v-model="user.password" type="password" class="form-control" name="password" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password_confirmation" class="col-md-4 control-label">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password_confirmation" v-model="user.password_confirmation" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <button type="submit" class="btn btn-primary" @click="getTest()">
                            Register
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Register from '../register.js'
    export default {
        data () {
            return {
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation:''                },
            }
        },
        mounted () {
        },
        methods: {
            getTest() {
                Register.create(this.user)
                    .then((response) => {
                        console.log(response);     
                    })
            }
        }

    }
</script>
