DELETE FROM vehicles where id = $1
RETURNING *;
