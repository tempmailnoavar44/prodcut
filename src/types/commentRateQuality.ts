export type BookRateQualityKey = 'scientific-quality' | 'practicality' | 'good-writing' | 'good-printing';

export type BookRateQuality = {
    [key in BookRateQualityKey]: string;
};

export type VideoRateQualityKey = 'convey' | 'responsiveness' | 'scheduling';

export type VideoRateQuality = {
    [key in VideoRateQualityKey]: string;
};