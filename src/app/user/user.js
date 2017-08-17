"use strict";
var User = (function () {
    function User(id, user_name, name, email, address, telephone, rol_id, telephone_token, password, hash_password, create_at, update_at, status) {
        this.id = id;
        this.user_name = user_name;
        this.name = name;
        this.email = email;
        this.address = address;
        this.telephone = telephone;
        this.rol_id = rol_id;
        this.telephone_token = telephone_token;
        this.password = password;
        this.hash_password = hash_password;
        this.create_at = create_at;
        this.update_at = update_at;
        this.status = status;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map