"use client";

import { Button, Card, CardContent, Typography } from "@mui/material";

export default function SampleSection() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      {/* Normal DIV */}
      <div className="max-w-md w-full">
        
        {/* Material UI Card inside div */}
        <Card
          sx={{
            backgroundColor: "#111",
            borderRadius: "16px",
            color: "white",
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Material UI inside div
            </Typography>

            <Typography variant="body2" sx={{ color: "#9ca3af", mb: 3 }}>
              This div is Tailwind. Card & Button are Material UI.
            </Typography>

            {/* MUI Button inside normal div */}
            <Button
              variant="contained"
              sx={{
                borderRadius: "999px",
                backgroundColor: "#7c3aed",
                "&:hover": { backgroundColor: "#6d28d9" },
              }}
            >
              Click Me
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
