export const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-warm">
          {/* Video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};