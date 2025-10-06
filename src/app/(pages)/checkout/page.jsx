'use client';
import React from 'react';
import {
    Grid,
    TextField,
    Box,
    Checkbox,
    FormControlLabel,
    Button,
    Typography,
} from '@mui/material';

const CheckoutPage = () => {
    return (
        <Box
            className="p-4"
            sx={{
                px: { xs: 2, sm: 4 },
                py: { xs: 2, sm: 4 },
                maxWidth: 600,
                mx: 'auto',
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 2,
            }}
        >
            <Typography variant="h6" gutterBottom>
                Checkout Information
            </Typography>

            <Grid container spacing={3} direction="column">
                {/* Full Name */}
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputProps={{ sx: { borderRadius: 0 } }}
                    />
                </Grid>

                {/* Address */}
                <Grid item xs={12}>
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputProps={{ sx: { borderRadius: 0 } }}
                    />
                </Grid>

                {/* City */}
                <Grid item xs={12}>
                    <TextField
                        label="City"
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputProps={{ sx: { borderRadius: 0 } }}
                    />
                </Grid>

                {/* Postal Code */}
                <Grid item xs={12}>
                    <TextField
                        label="Postal Code"
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputProps={{ sx: { borderRadius: 0 } }}
                    />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12}>
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputProps={{ sx: { borderRadius: 0 } }}
                    />
                </Grid>

                {/* Checkbox */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Text me with news and offers"
                    />
                </Grid>

                {/* Confirm Button */}
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        sx={{ borderRadius: 0 }}
                    >
                        Confirm Order
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CheckoutPage;
