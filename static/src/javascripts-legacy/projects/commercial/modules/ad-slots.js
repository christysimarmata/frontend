define([
    'common/utils/detect',
    'common/modules/commercial/ad-sizes'
], function (detect, adSizes) {
    return {
        right: {
            sizeMappings: {
                mobile: [adSizes.outOfPage, adSizes.empty, adSizes.mpu, adSizes.fluid]
            }
        },
        merchandising: {
            label: false,
            refresh: false,
            sizeMappings: {
                mobile: [adSizes.outOfPage, adSizes.empty, adSizes.fluid]
            }
        },
        inline: {
            sizeMappings: {
                mobile: [adSizes.outOfPage, adSizes.empty, adSizes.mpu, adSizes.fluid],
                desktop: [adSizes.outOfPage, adSizes.empty, adSizes.mpu, adSizes.video, adSizes.video2, adSizes.fluid]
            },
            getName: detect.isBreakpoint({max : 'phablet'}) ? getSlotNameForMobile : getSlotNameForDesktop
        },
        container: {
            sizeMappings: {
                mobile: [adSizes.outOfPage, adSizes.empty, adSizes.mpu, adSizes.fluid]
            }
        }
    };

    function getSlotNameForMobile(index) {
        return index === 0 ? 'top-above-nav' : 'inline' + index;
    }

    function getSlotNameForDesktop(index) {
        return 'inline' + (index + 1);
    }
});
