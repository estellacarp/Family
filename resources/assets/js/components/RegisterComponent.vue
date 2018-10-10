<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <h1>Hello Register Component</h1>    
                    <div class="form-group">
                        <label  class="col-md-4 control-label">Name</label>
                        <div class="col-md-6">
                            <input type="email" class="form-control" name="email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label">Group</label>
                        <div class="col-md-6">
                            <input type="password" class="form-control" name="password" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-md-4 control-label">E-Mail Address</label>
                        <div class="col-md-6">
                            <input type="email" class="form-control" name="email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-md-4 control-label">password</label>
                        <div class="col-md-6">
                            <input type="email" class="form-control" name="email" required>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    const Register = require('../../../resources/register.js');
    export default {
        mounted() {
            console.log('Component mounted.');
            this.getTest();
        },
        methods: {
            getTest() {
                console.log('here');
                Register.create()
                    .then((response) => {
                        console.log(response);
                    })
            }
        }

    }
</script>
