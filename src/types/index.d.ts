export type MenuDataType = {
    id: number;
    name: string;
    path: string;
    hasChildren?: boolean;
    children?: {
        id: number;
        name: string;
        path: string;
        hasChildren?: boolean;
        children?: {
            id: number;
            name: string;
            path: string;
        }[];
    }[];
}[];

export type ActionBtnType = {
    enable?: boolean;
    label: string;
    link: string;
};

type HeroProps = {
    hero: {
        data: {
            title: string;
            sub_title: string;
            description: string;
            image: string;
            video: string;
            action_btn1?: ActionBtnType;
        };
    };
};

type SeoHeroProps = {
    data: {
        title: string;
        sub_title: string;
        description: string;
        bg_image: string;
        image: string;
        action_btn: ActionBtnType;
        rating: number;
        reviews: number;
    }
}

export type TWorkType = {
    data: {
        draft: boolean;
        id: number;
        title: string;
        image: string;
        date: string;
        tags: string[];
        meta?: {
            meta_title: string;
            meta_description: string;
        }
    },
    slug: string,
    content: any

}

export type TServiceType = {
    data: {
        draft: boolean;
        id: number;
        title: string;
        icon: string;
        image: string;
        description: string;
        contactTitle: string;
        btn_text: string;
        tags: string[];
        faq_title: string;
        faqs: {
            question: string;
            answer: string;
        }[]
        meta?: {
            meta_title: string;
            meta_description: string;
        }
    },
    slug: string,
    content: any

}

export type TProcessType = {
    data: {
        title: string;
        shape: {
            light: string;
            dark: string;
        }
        process_list: {
            serial_no: number;
            icon: {
                light: string;
                dark: string;
            }
            title: string;
        }[]
    }
}

type TTestimonialType = {
    data: {
        title: string;
        info: {
            rating: number;
            reviews: number;
            text: string;
        };

        testimonial_list: {
            icon: string;
            text: string;
            author: {
                name: string;
                post: string;
                publisher: {
                    logo: {
                        light: string;
                        dark: string;
                    };
                };
            };
        }[];

        clients: {
            image: {
                dark: string;
                light: string;
            };
        }[];
    }
};


type TTeamMemberType = {
    data: {
        id: number;
        name: string;
        post: string;
        social: string;
        avatar: string;
        image: string;
        description: string;
    };
    slug: string;
};

type TBlogType = {
    data: {
        draft: boolean;
        id: number;
        title: string;
        image: string;
        thumb_img: string;
        tags: string[];
        published_date: string;
        likes: number;
        comments: number;
        shares: number;
        views: number;
    };

    slug: string;
    content: any;
};

export type TServiceInnerType = {
    data: {
        title: string;
        description: string;
        services: {
            id: number;
            title: string;
            icon: {
                dark: string;
                light: string;
            }
            features: string[]
        }[]
    }
}

export type TWorkInnerType = {
    data: {
        title: string;
        description: string;
        icon: {
            dark: string;
            light: string;
        }
        projects: {
            id: number;
            title: string;
            image: string;
            tag: string;
        }[]
    }
}


export type TTeamMainType = {
    data: {
        hero: {
            btn_text: string;
            title: string;
            description: string;
            total_client: string;
        }
        image: string;
        total_employee: number;

        team_area: {
            title: string;
            description: string;
            team_member: {
                id: number;
                image: string;
                name: string;
                position: string;
            }[]
        }

        counter_area: {
            thumb1: string;
            thumb2: string;
            thumb3: string;
            client_count: number;
            client_title: string;
            funding_count: number;
            funding_title: string;
            bg_1: string;
            bg_2: string;
        }
        community_area: {
            title: string;
            description: string;
            gallery: string[];
        }
    }
}

type TjobDataType = {
    title: string;
    vacancy: number;
    experience: string;
    working_days: string;
    working_hours: string;
    salary: string;
    deadline: string;
    location: string;
    post_date: string;
    job_type: string;
    bg_image: string;
}

type TJobType = {
    data: TjobDataType;
    slug: string;
    content: any;
};

type TAboutType = {
    data: {
        hero: {
            title: string;
            sub_title: string;
            description: string;
        }

        counter_area: {
            thumb1: string;
            thumb2: string;
            thumb3: string;
            client_count: number;
            client_title: string;
            funding_count: number;
            funding_title: string;
            bg_1: string;
            bg_2: string;
        }

        award_area: TAboutAward;
        team_area: {
            title: string;
            description;
        }

    }
}

type TAboutAward = {
    title: string;
    sub_title: string;
    description: string;
    images: string[];
    awards_list: {
        icon: {
            dark: string;
            light: string;
        };
        count: number;
        description: string;
    }[];
}

type TAboutFaqs = {
    data: {
        title: string;
        image: string;
        video: string;
        faqs: {
            question: string;
            answer: string;
        }[]
    }
}

type TSeoFeatureType = {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: {
        light: string;
        dark: string;
      };
    }[];
  };

  type TSeoAboutType = {
    title: string;
    description: string;
    action_btn1: {
      label: string;
      link: string;
    };
    action_btn2: {
      label: string;
      link: string;
    };
    experience: number;
    experience_title: string;
    gallery: string[];
  };

  type TSeoClientsFeedback = {
    clients_avatar: string;
    title: string;
    subtitle: string;
    description: string;
    review_title: string;
    clients: number;
    rating: number;
  }