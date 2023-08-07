import connectionInfo from "..connection.database.js";

const querySearchUsers = async () => {
  const search = new Promise((resolve, reject) => {
    const connection = mysql.createConnection(connectionInfo);

    console.log("connection", "querySearchUsers");

    connection.query("SELECT * FROM users LIMIT 3", (error, results) => {
      if (error) {
        console.log("Error: ", error);
        reject(error);
      }

      resolve(results);
    });

    connection.end();
  });

  let users = await search.then((result) => {
    return result;
  });

  return users;
};

const deleteUserById = async () => {
  const connection = mysql.createConnection(connectionInfo);

  const queryDeleteUsers = new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM users WHERE id = ${userId}`,
      (error, results) => {
        if (error) {
          console.log("Error: ", error);
          reject(error);
        }
        resolve(results);
      }
    );
    connection.end();
  });
  return await queryDeleteUsers.then((result) => result);
};
export { querySearchUsers, deleteUserById };
