// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

// UserRoles.Admin = "Mon casse";
/*
1.typeof operator
2. keyof operator
const
*/


const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissable = canEdit("Admin");
console.log(isEditPermissable);
