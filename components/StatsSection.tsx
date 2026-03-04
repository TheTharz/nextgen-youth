export default function StatsSection({ dict }: { dict: any }) {
    const stats = [
        { label: dict.home.stats.meetings, value: "3" },
        { label: dict.home.stats.projects, value: "1" },
        { label: dict.home.stats.members, value: "25+" },
    ];

    return (
        <section className="relative z-20 -mt-8 sm:-mt-16 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-6 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:divide-x divide-y sm:divide-y-0 divide-gray-200">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center py-4 sm:py-0">
                            <span className="text-4xl md:text-5xl font-extrabold mb-2 text-primary drop-shadow-sm">{stat.value}</span>
                            <span className="text-gray-600 text-lg font-medium tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
