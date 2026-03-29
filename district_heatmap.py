import seaborn as sns
import matplotlib.pyplot as pl

plt.figure(figsize=(12, 8))
sns.heatmap(profiles_df, annot=True, fmt='.2f', cmap='RdYlGn_r', 
            center=1, vmin=0, vmax=3, cbar_kws={'label': 'Ratio (r)'})
plt.title('Conditional Crime Profiles by Police District', 
          fontsize=14, pad=20)
plt.xlabel('Crime Type', fontsize=12)
plt.ylabel('Police District', fontsize=12)
plt.xticks(rotation=45, ha='right')
plt.yticks(rotation=0)
plt.tight_layout()
plt.show()
plt.savefig("district_heatmap.png", dpi=150, bbox_inches="tight")