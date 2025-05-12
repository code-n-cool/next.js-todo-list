"use client";

import { useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUsers } from "@/redux/usersSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.items);
  const total = useAppSelector((state) => state.users.total);
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || "1");
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchUsers({ q, page }));
  }, [q, page, dispatch]);

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#191925",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Users Directory
      </Typography>

      <TextField
        defaultValue={q}
        variant="outlined"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`/?q=${(e.target as HTMLInputElement).value}&page=1`);
          }
        }}
        label="Search users..."
        fullWidth
        sx={{ mb: 3, input: { color: "#fff" }, label: { color: "#aaa" } }}
        InputProps={{
          sx: {
            bgcolor: "#383849",
            borderRadius: 2,
          },
        }}
      />

      <TableContainer component={Paper} sx={{ backgroundColor: "#191925" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#aaa" }}>Name</TableCell>
              <TableCell sx={{ color: "#aaa" }}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            onClick={(e) => {
              const row = (
                e.target as HTMLElement
              ).closest<HTMLTableRowElement>("tr[data-id]");
              const id = row?.dataset.id;
              if (id) router.push(`/user/${id}`);
            }}
          >
            {users.map((user) => (
              <TableRow
                key={user.id}
                data-id={user.id}
                hover
                sx={{ cursor: "pointer" }}
                onClick={() => router.push(`/user/${user.id}`)}
              >
                <TableCell sx={{ color: "#fff" }}>{user.name}</TableCell>
                <TableCell sx={{ color: "#ccc" }}>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(total / 10)}
          page={page}
          onChange={(_, val) => router.push(`/?q=${q}&page=${val}`)}
          color="primary"
        />
      </Box>
    </Box>
  );
}
