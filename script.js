<script>
    var list = document.getElementById('users');
    function addUser()
      username = document.getElementById('username').value;
        email = document.getElementById('email').value;
        entry = document.createElement('li');
       entry.appendChild(document.createTextNode(username + '' + email));
       list.appendChild(entry);
    
</script>