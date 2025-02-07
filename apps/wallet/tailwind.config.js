// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module.exports = {
    presets: [require('@mysten/core/tailwind.config')],

    /*
     * NOTE: The Tailwind CSS reset doesn't mix well with the existing styles.
     * We currently disable the CSS reset and expect components to adapt accordingly.
     * When we fix this, we should use the following as a CSS reset: @tailwind base;
     */
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            minHeight: {
                8: '2rem',
            },
            height: {
                header: '68px',
                7.5: '30px',
            },
            width: {
                7.5: '30px',
            },
            borderRadius: {
                '2lg': '0.625rem',
            },
            boxShadow: {
                notification: '0px 0px 20px rgba(29, 55, 87, 0.11)',
            },
        },
    },
};
