"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Typography, Paper, Button } from "@mui/material";
import { User } from "@/types/user";

export default function UserDetailPage() {
  const router = useRouter();

  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/users/${id}`);
        if (!res.ok) return setUser(null);
        const data: User = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to load user:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;

  if (!user) {
    return (
      <Box p={3} sx={{ backgroundColor: "#191925", height: "100vh" }}>
        <Typography variant="h6" color="error">
          User not found
        </Typography>

        <Button
          variant="outlined"
          sx={{
            mb: 2,
            backgroundColor: "#59B18E",
            "&:hover": {
              backgroundColor: "#34a074",
            },
            color: "#fff",
          }}
          onClick={() => router.back()}
        >
          Back To Home
        </Button>
      </Box>
    );
  }

  return (
    <Box p={3} sx={{ backgroundColor: "#191925", height: "100vh" }}>
      <Paper sx={{ p: 3, backgroundColor: "#191925", color: "#fff" }}>
        <Typography variant="h4">Name: {user.name}</Typography>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Email: {user.email}
        </Typography>
        <Typography variant="body1">Bio: {user.bio}</Typography>
      </Paper>
      <Button
        variant="outlined"
        sx={{
          mb: 2,
          backgroundColor: "#59B18E",
          "&:hover": {
            backgroundColor: "#34a074",
          },
          color: "#fff",
        }}
        onClick={() => router.back()}
      >
        ← Back to User List
      </Button>
    </Box>
  );
}
