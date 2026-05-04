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


keyof typeof UserRoles

'Admin' | 'Editor' | 'Viewer'

*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissable = canEdit("Admin");
console.log(isEditPermissable);
