<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="firstName"
        class="form-control"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        v-model="lastName"
        class="form-control"
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        v-model="username"
        class="form-control"
        placeholder="Username"
        required
      />

      <select v-model="gender" class="form-control" required>
        <option value="" disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="number"
        v-model="age"
        class="form-control"
        placeholder="Age"
        required
      />
      <input
        type="text"
        v-model="location"
        class="form-control"
        placeholder="Location"
        required
      />
      <input
        type="password"
        v-model="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <input
        type="email"
        v-model="email"
        class="form-control"
        placeholder="Email"
        required
      />

      <button type="submit" class="btn btn-block">Submit</button>
      <p>
      {{ jsonData }}
    </p>
    </form>

    
    
  </div>
</template>

<script>

export default {
  name: "to-register",
  components: {
    
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      gender: "",
      age: "",
      location: "",
      password: "",
      email: "",
      jsonData: null,
    };
  },
  methods: {
    submitForm() {
      // Create an object with the form data
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        gender: this.gender,
        age: this.age,
        location: this.location,
        password: this.password,
        email: this.email,
      };

      // Convert the form data object to JSON format
      this.jsonData = JSON.stringify(formData, null, 2);

      // For real use, you can send this JSON to a server with an HTTP request
      console.log(this.jsonData);
    },
  },
};
</script>

<style>
.register-form {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.register-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-control {
  margin-bottom: 15px;
}

.form-control::placeholder {
  color: #ccc;
}

button {
  background-color: white;
  color: #007bff;
  font-weight: bold;
}

button:hover {
  background-color: #e6f0ff;
}

/* To display the JSON result */
.json-output {
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  word-wrap: break-word;
}
</style>
