var form = new Vue({
  el: "#form",
  data: {
    name: "",
    age: "",
    email: "",
    comment: "",
    nameError: null,
    ageError: null,
    emailError: null,
    commentError: null,
    submit:"",
  },

  methods:{
  validate: function(){
    if(this.nameError==""&&this.ageError==""&&this.emailError==""){
      this.submit="Submitted"}
    else{
      this.submit="Not Submitted. Please fix the errors."
    }
   }
  },
  
  watch: {
    name: function() {
      if (this.name.length < 2) {
        this.nameError = "Name must be at least 2 characters long.";
      } else {
        this.nameError = "";
      }
    },

    age: function() {
      var ageMin = this.age > 18;
      var numCheck = !isNaN(this.age);

      if (numCheck && ageMin) {
        this.ageError = "";
      }
      if (!numCheck) {
        this.ageError = "You must enter a number.";
      }
      if (!ageMin) {
        this.ageError = "Age must be 18 or older.";
      }
    },

    email: function(email) {
      var characters = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if (!characters.test(email)) {
        this.emailError = "Enter valid email.";
      } else if (characters.test(email)) {
        this.emailError = "";
      }
    },

    comment: function() {
      if (this.comment.length > 250) {
        this.commentError = "Must not exceed 250 characters.";
      } else {
        this.commentError = "";
      }
    }
  }
  
});